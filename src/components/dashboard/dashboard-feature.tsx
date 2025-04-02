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
    "2Q8eChxKH5cbMHQ5RVWmUmVNc8j6x4V7ybyV31g25qzPtKE4z7oYUoRwaNf8rWhjJsYLYwdpPizA63j1k9ia1B35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bjvedkz6e3v9krKV8AeKjwwenF5BEzpQ9jJRotbfYkEDo3Sid7LBV52LcCrosZoVt3rQTs6JNrC2RQ2BDz6Be4c",
  "key1": "6ed112BPHhqakSy3TLP4HHjq54shJYwM8R38EAVQYFX5XZac2YY5Adbv8tPL4p5eNEEsG2d6691th9qJBerDiRa",
  "key2": "3Yk78AhZJLbMC2ZSLdxDKW1cZH4YvtKLPyQ3sbHi3h7FY7VwsFLhi6Y2r3NmuJ9ZaYhzJFWgdiSAHRstqU454m7P",
  "key3": "2CZzBpesQ1mjcoBqKrYh9daWJwfrMv6ejEDhZTdwb28pZZ3qC4cSNhzQFp7L7izwy6u8HAtdhcEgknnHVSEywcFg",
  "key4": "3D4Nh8tdyZiQwWxLKzEJPtK983asqbJWS2XAhtFiPxpL4iqHRJJTZYkfGVXrEdx8VH9jNJemcLCfTqbZTzXVj54K",
  "key5": "2SNyZJQ4oUJE4mZEfkAxvnkmAKJKdsDXN6X61W7xX2imqJoTGBbRAK9S4PHqWzuKgTNnLFoVVsK33ABgLZgfzpnu",
  "key6": "3b7ExrNbbUWFWBQEh118ePDofGzzDuCGFZRmYCYTUfBnKoAvSjotAbLYwhfYewPeE3ZAE5XmCws8ysR4HqB3kV9n",
  "key7": "vi6sgeA3xA9mJg8TjfFCN6zbwrJDJsZktHJXpaBrfgRx4rMGZJwdBScQW38M3nyv1JXoyx9mmM2pF1ntG3Npose",
  "key8": "5w16TYwiAsE9rAF36aiFAK8Ww3HjW3sQRTBmyT4cLKrLhaaa8nDegGCE5sKzP3BepBNEdKkv71aBFUhEzxnK1LTg",
  "key9": "2xyVpAACSYKqbQMdfUaRWr5AD7BSat7s81fPSusxU2iBhFF2Rykb1kVkxmxXorgh9J2iv5UxJuXTWuvr87ANqWRD",
  "key10": "2nrZkZoKg3HCMtvsNkHW6Fy1eD7YSV3mBap9MuayxQRJci4XsVbTLH3yV6srwnn8HcC3GfNNKM1pZzYvfeE5SuHd",
  "key11": "4VqXD4SyWFNzbyMtKP8oNARzZiyyWSzyR1XoeoaMkQsvui2bM2FKG9tTiYxB1fsGnrnTYY5JCUNoSLPFaoc8tZVN",
  "key12": "4QbThn452yQ2nzQW16YaS6oCN3JxsuXf2CMYYsLJzpJ273Dbcz4Bdq4KkznMjytpMMaqmBVNKbDVmSwErZKRWKxG",
  "key13": "4oiH8WsJD5wUpMrJFnWqGA4unbqyG8Hbd8pMcTEnzfkxd5Wa9YanfPZpndxejLWpEpTJS7DXSpDf7qZmkjbfq3cm",
  "key14": "3d1PBbp7nfQX9XmF46vnetx9PCf1dKbV9pA4GeLdZbuwL2e3AEtiYPFWNNd3NSeHb4C1XQtnRjHEc1dnsnpu7peY",
  "key15": "3jpBcwErGN1hb3smTmpUAF6Y8BqLbyoXQrNTFh1v9vG1PeaLLypZRNnNia7VsJs99qE2ov6TLYCk3LGCDbiETsDW",
  "key16": "3dGmX3LTwT4AL6qYN9AWp82Zo8yb5cG1FKi4AGyfw9ELLbaaMJfRso8TPSaB2xpLk4sjk5FQhqc71kHH1ZvahUbu",
  "key17": "5dy43WTfYSG98GSK1KDJnEUMRzDrvZdp6d8LwrRUMBF74byUxUbWK936zfUZ9DG29xGeF5Ycm6zcugDTVTJDKDHi",
  "key18": "2DjQHbVNg4SbzzVvDHNEu8f8a9YRM1bnY3RpWa3xSrMVjb1ENASNXxXpyjgNZhoKSE2v5bxr4UgdZf7AiU76pPh3",
  "key19": "4vvzat6wCktGSZofVyaAujnrkttzzrbGzJXvFqMGGFb2CN3UMY523c5MDEeMkEJqWNV4Gpz7RhzpRgoLJysyCDDv",
  "key20": "4g6NbNAqoEpzEmcbA3BpfjK9NNWupr2ZXvUT75jd8cKiSRDU1SRFLn9c2uh6GyLzDmAwromhTqYT3B7tfJti4KeS",
  "key21": "4zGXz1VB6tY6pYkdA77gPnVMkp4ajGxWGGTcPDdojjiWFmWnYFfgDUqVQXf2Y2aJ7yguDjT2W7Mtcy9SGg6JGr9u",
  "key22": "2JmJ8RpUHLt3XFx5ebBy2GLkqXf5kexZKMAGwtUyrYmAcqnDx5f346MkmGy6mqkAZ1A789sevSKCReV81T86W3kP",
  "key23": "4Nvr71Q3urbAAJrfutaujHwCXX8sLq8jend3makJK22WyMEA3J9XvtiDvCwJEGpYAPxyk4Pj86Vt2UMN5QnJkS3q",
  "key24": "2PBQoq8x87g4MFUp89rEwcvpXAzDcB3d9XJYgvoG9GeKK1p3WR479dRL4btxjJx4VjPWGR8BqYZ3rKWRUXoSJZ8Q",
  "key25": "52yu4uSV192sV8sHTm6orUxgeWvtgMfMFByjJMB4jwQZuKS6fYWASYsfW1FTUH4CaU487t1xXisaAb3T58w7Xwjf",
  "key26": "SZDEDsggbY7pdp8XEDD6TmWAFdgiTEwFgSmYNbXBSyBXWMHDZayxDez8eKBohhrJaXyLbjSf7vEX3Er81W4e4ti",
  "key27": "AAVZnfKooxvSELhrdX1gszjLT22H4V6vkwRKY6X4LYUXEcFhrJBzskngZYdVaQ6qtZptLTVzKtm6zLduPd7Qb2w",
  "key28": "2UBmpnKx46Wu5ASkwpJ5qWGq61mSCepcnWRgTCBghGjfF2eG7vWmdVzHaEnMFa2AWHJbetWJrUKE9ixY7eT7GuSw",
  "key29": "4PoSRS5xdPWq1EZc21Zwe1PrWw39askXsKXNV17hUs23cH2EanXLVgEcf2WMAFZduRU7ZFYeb8zdB7XWgCQUTBNb"
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
