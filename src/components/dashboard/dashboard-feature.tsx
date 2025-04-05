/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "36mbCcgxqxPN6nNqWYCExMFoqZ6Lahd4o8PEZ8PjoSGeNFhTA9GMWMsjXjEMb5Td9yDVJNRJbRZ3DaMCGNzzreQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJG2Dbkp5JJHbo2JjfDECyzqnhsE6YXRQoZ9enAo8L7SaR8Nwcbdd15oxZJGSR6xGCy6dav5tKWdi1w3MG2zEh5",
  "key1": "cdoQtSy4NnXNKfwf2rDjwp9fECpC2VVgSMAFwoNT2sB7sSHyutSkCbgsmzFiQT89rHLtmDZ2SfmyCQPr2P8nRhv",
  "key2": "jHpSsu5toJNUEFwgcJ8QA14uojHkQUEdDgs6zc3Dd2G7v9zstYhu2GosJZAUtSck6wBqBu2KN9nfchc8z1JBWLc",
  "key3": "2CiqoHQ1GMeLkUppRyrGi6yiRQreidWJaZFuC5UY32UL58hV7H6k3jsjC8hND5dxw9wBbW4AnAmQDkPnyArm65N",
  "key4": "3pd9dgJDfctar9jKfuePnqr5BsKDu2qKs5amywdG8St4u22Bs3CmY8ZwhFAJbDWTZm5fw9vLaCx5sfRm3eJLG3Nv",
  "key5": "JSdUjjVHAXptGGZA22jRyUWv42wWBQ2VPqfHSf9KE5d87XCL2NxnpcjhHVReN1Lcv4jJhxrriy4trKMCKEEYeo9",
  "key6": "3TvidW1zrpr6ieTpDPUnurED55g5qDykVzhvswQ2j2dsiCNgFoEdRnGqc3954UF99JWiKupR5tiUosFWjdLonxo",
  "key7": "4GinUTNnueyrAo4L2A7B6CCDKC6jKwpDZBVW6jfqp9q7wLC2D7HhjE2ikhYaVGcytctmx75g1avxo8noJj48oEcw",
  "key8": "5iVE4494doydDTqXEsgDaVRaXqTUP2Loo7SL1aZeJUyfN566DZaMzrL1qbsb1FTpq92FPJiVesLvh6dq3PJd3uHX",
  "key9": "55tQCFzRtcJSGPbM2rjU5vVEd22CneXrbTY6C5Cj7swP5r36REaeQ79HuhdBrFTwof8jHRjXXXKSgWZ9RBTzdcmZ",
  "key10": "51QGM5HBpyQ3GEj3eoevd5fD61PGpSNkJzBWch5S8DghpdJoVzF7Z1FBwppbbYwip1xASryEDVoGBNU6a8s8ixYk",
  "key11": "5U7r9EvQtr1MTyiiyeiKiX2pCbNTpNVBq8J4jHG6uxN1n8HH7XEtazmbu7nYi3PKoXF1n63ryqEYcvmvq4RGLUVR",
  "key12": "PaPkR8C5ZDGWRDtCgYkuxH5Q4D1YeXjX15wwWTAvBsULoW8WwmTM2Dtj7QhcyikZPeiJecx6RoSyQCUXenLKA9r",
  "key13": "4abTh14pGUMpU71jLRKaihmnpqgHr3pDKD1cDLBs2TcLsnaoKLg5VNweNX6f6LRyTD7kefWc89g5VBd53nvhtuFU",
  "key14": "7jHsgzMuEeNrtFiAdCA46opbZ2GCvdKkzJ5xjUQeJKjd4SjEKCkjMt4XPQrfL29KrRZJMKc25xEePJFQSiYvRVr",
  "key15": "J8JAo7WTDwDqHbATq8RVzGfbBX4yCgCgi27Y66pJJfVLSTs4mn8McsdX3H8v8U95ckLcULcNZ9yMLZja2VPAsEo",
  "key16": "65etGoY9DNQ3EbjtAeCGKkFKqVrhCexXVP7anpy7R8KtaP8tHBKvHUdfu2A9WgbfuSSyRxjgbqJDKM9AMsK9AoEr",
  "key17": "4eK4jy3jxTXPPCh6ZHWWg8ntjg4CcLZBujUjjaj6jS2H5ePGH229qFjNhvxbQSaBShxG1xFuWVE43CVCxxhoqT4t",
  "key18": "2caHW5dvArr3mSm5PSqZix2qE5Gjh7kxdRm4Zs8ivmFyvaH9y1v61K8SiGCBvewwUxV23jhKhQXxnTkDAaSxcWDt",
  "key19": "2kffYy5DTWCa4M2mpXxDqJNAgrk7sb2PgU6oSHBbHKC1RjNaBhkpU9yQpASW3aC7iF3tzhHyvBQ85Sk4o56H4Tay",
  "key20": "4vgwQPbMSZVjyi6De5YdW3Fp4gFJVh2xZNHkaTJYnyEGV3XqWwDR5PnRoV6etp8MZLnjuv2Nqn269LRVZ1eFETg4",
  "key21": "2uWHPph8FYTar3BDNspuXaW8M1kwcXecvVGmQhZnqoMfG8pCZuoRfGftSrhf7iZjAdJjZMu1ehyWUvTpzpj2Rcx3",
  "key22": "NTnV6JZUF2Nsa3AwNUdhGBtLBcqwFmWYr4i8U5NA6Pkjg6t7xJ6jiSECQrEUa34vqcf4rcjXizQM9bc2K5G1pbR",
  "key23": "4RUVsBMmnf2XH4K5zi7QS8EUjRp9yR4Uk6fQg4iFUWozbFoxzKVQw3dNW5558j3k7m3TgMLPCa4KLhMc3tDmhEx8",
  "key24": "4UdPbTLDsT3dYuvqdq8q3fVahfZEx3ZX2jSabT2A6U2SSK8uiR9f9oKxdsMoTHn8efw3nfoGbS6Geh22A8XrTA5o",
  "key25": "62DMCKJ4Kn42W6gw2NxiJERochvmTXmaNZieDgoChxKZrBtsrQx5TbAhmFhNLgSApt91p2CRt98gK4j3cWNBoVCs",
  "key26": "61KF1YTwwGJ5G7fPGTyudQm1gf5FFKJZNViNnxqM9aVa5wo57F474Fe7nQ6iFYospy9BnfQLM67p9wFXXWRXfzgV",
  "key27": "1HA85uAcDxGZaMRzYHXuqtE8qUySFB5Z9tfysRdPr83554SxW8P2XJBe31719WRwxvxdTrgMUXJ55SsQg1R2xHb"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
