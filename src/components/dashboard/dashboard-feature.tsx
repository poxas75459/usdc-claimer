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
    "7n3N9LxRdxkJ4GT2EA4Xn8Fc5ERuZFLFXeDmQRCEcQ41wbgkWRPUe5FdvGhAUqWh7hunvvFLnqZd3npDFkvtpJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBk81jL1yLdz7eFHiVaSSyKTcSrWrDxdkdSZMQZkfoV47aBe2yBd1vPsPCima9nzCSivCacoigTFV5JbGseRZ9h",
  "key1": "2wRoQZ7WbjV5NkUh9XGC1TC3NZmJzo4L7dex7ZCGJzcCX2ZvCU22YkGPc4VT7svVFbnj4RCpe9Hoyko7SPpjkKPG",
  "key2": "5k5hMyTF5MCVY6vQRHdmNugkzxPbXcqUm59aybyx1AcYQt4vEFQhVU59bmzxxgsrFXBju6qhQFuSz5HhQirT7NpA",
  "key3": "2L2Su21dhXEcbmaL4AMcVyWyvQMZiha8m9A7YTRyHHtskBh9XFFYc1QEX3DThqbXgiVcAj7DtxXcD97RxEtNY4mw",
  "key4": "4jmuMTSsAatno7n8He96aVzXAs4CCLbHYHzUNVJFvNs2XkfxPij5i9ctFNWsUjJB7p4JEDrFvSRhBkWdFg6v49CZ",
  "key5": "P3AcredRMjGqPbCtPG2fZ7Mas2gsbnf47bwmvU8tHcoARV4BS58XkNE2QHJfgUaTcdSVmsGdMYRDJDpEZeWRyyQ",
  "key6": "7ySY6VQk6DDuxGLnm3uqTwkpRrYJCPbVimEMekvHagKdenP8i9NAbfBk7aD7UfcrQBXV83e4QRydGe1NB5ZuM2M",
  "key7": "2DNie73Knt7YgPF8ajENj5dWUyYjPt56UqrCqR6XtV5Pm35P35Kb99tN3AXzos73WHmUbNsU29tifPoSR9diBmq",
  "key8": "4QQE131QzUGDyWfND998USUZyTgJ35XegMYdmF8XXiAasFhKaQwC214nESQ3vv2r53cQYoJxWe5WS9vRPsYbaoDG",
  "key9": "WNu3dYK8vo3cH3gUJR2XVMMpYQ2gyzyy2ZJZfAPBjNC8w9psCuhhkTQTSuCWAeVzBZgTzLqcPhZCofJ8drRn74L",
  "key10": "ftHjw6JETqDybVd7FJLN57JDZDochbmKXJ5MHo5KHQPLve9DEiqLckBAaxxNJikn1si9f2HNUWNEQ9f6WwdxRHb",
  "key11": "49161qAemeSeNWM3HgQhXay9TUp8qpscdbxAAGbUBBijYgtYRUvGibgxFFwUVzxUZ5T9GP2bqaWssCbmy4ZZ7UxB",
  "key12": "a5ABUk6QpEkSbrEmDV4eMT6XHbNMua6FiaPTh2M4KPf4J7MdnT9u254GNRqPVG77rMvADfJ6YHYcJfpggyNCKaz",
  "key13": "4DRskNkmykM9H5i2CAin5ggicuZWsmEXhh2LdBsff4RXMFZ4zMAws52qjEPsyKfikdihY6etDui2LToruyUmbHNH",
  "key14": "67hDoniUkuELm5MnBVHzsm1Ay76RZSGKfW26WQsZP2A1smzCatLHA8jJu7WdpV88VxZimd1BbZza7JcHhP3B9Xvh",
  "key15": "eUvkMtz9TywF1ES8Q5QkTX1rczqaNac2vycWYy6HxEi6jSDDo337pugmWGnNNhHws2MPTByunxJyKZURVSnpGe5",
  "key16": "2VkHCB2WgA5qvypUghRD1vQgKxKWVninbjZ2RCAv7W7hV7EwPmrDZnKmFx8Bs6e32k2A54r9xVDNAcs2bqdnQPJd",
  "key17": "3dmok8qGSG3YnWWbtg8ma4zQtjvNVYmYXP2E2dB1KCimE8R1hgPsYiyzzzTNTiXwEXp3EHd39kcBqSDbvxeb3P32",
  "key18": "4KUSHQzZafPefCnmC1zZHrB4oGHqnR6ma7DZkK5mpSwwgiBDq1WVvXBPHmFEi3ue87TcpUFjauMxxomdLvEKZaeo",
  "key19": "615nM8A6U2by5g3TxmBr1BWe2C5JQYv9ZQQTGiRC4XgJwzig27ctLL994iRMTr59Y9nwqwnYcrdQtLqFMZqQ6QDK",
  "key20": "66bgH38AVpCYrDqf58HrUNrTB8JRUzg6htkZATTWLcaxNvymtNfzJjHHHsuqB1RjovBxRLDoBrtgpGVz1Q1WETLt",
  "key21": "3kxgVJkWX9LGm9tBSPDN6jwmRZfW8MND268Gru446atVbTyJzMDPnCPUbkLKNdoSTKWAU8Hdkypcmst4Uh3fxQAV",
  "key22": "cNEXNGuUakYWhhy9w6EQKmT7E2wSC3TbeN887Upa77aXiRsz3jZRnhY2P5SiHQaHdxkNmDon5pjAYketezoQLbv",
  "key23": "vVNAhNNubhjDxBQXP3Q8DwKACLCJgArZQyH25pW2R53zJFUPNzGzps4kgwZB2afxmwnkUUBeWay9dQnhCw35wVd",
  "key24": "2EpPzprtAqWsfoGP4sqLqpPmTCzcXQRHU5jJuK4CUMjKX51PHKpcxZWVuBHTzgeSFrE9xsqycccA75vZpaqAWowa",
  "key25": "3jr7Uaq7DNUSxXnxE9x5kH3exzvA5sUC9JdmzXVWH63Y7oWeHmm4XFUty95Rgw8Lm4fZywnvaWpPWSXkDw1rpBYK"
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
