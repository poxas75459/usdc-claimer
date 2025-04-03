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
    "3yYfGJmAiseY8ET9FboMdLXCbsmgSwtajnWVvgPiWWm6gMo2xvkPJRFTeFPtVzRQAmnZNPnNDxmzERn5b6oLmDgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAmTqnHBxK9iazMMbxZtB41WrwJB4JFrkBP6uX2kRkZTh6ZwVshY32XaTaVB5Vkcy8aFmKNaPKEx3YELUZccWYk",
  "key1": "3N9jSCMhtFLYDiJMUotnqbSowRLbgYoncv8oCMnJVCw6apQ4pFfFaGefu8rDxUh9RfX8yUeNEud9UcrKwH3EH9tC",
  "key2": "5t9EteZsEvWPL5qWnkEi8JH1aRjUuwop32mGEzKmhfgvQn1DKVVdJUPiwipHyymfdXN7D8eyhpvCoWwyPpcLhZgc",
  "key3": "38vu78jpLaNaQ6NaxwGy2RMSWLDxfQcSnxpuYrLhzBhZk814giGi9wDmUKf8vhVvgXpeagnav6q35UWVBSCpafGj",
  "key4": "8VR4bZ8P7HtQikkqYaMtTzrTPPL23UnN3U2XaUU4nW2rgN2Wx177XT2dtTLbrPcAkLkARGKR8YdoQBPAiALMR2P",
  "key5": "2RsCSSw3DiatWx4XLpYwNiP7rm6TmmhxAGi83dJ1dcTUaiomvNZyWLwNg4fU1EFLzqanTXM7fhRqfq5UbGgkqpsV",
  "key6": "44A45kriuiPLZqUcqWBpeCb7nN3K2vDRyzEWWPx7Q1nEZjXnUwXJTfm7UGfJyXzJXyMnyrnGrLBbhNAU5h1gdir4",
  "key7": "4Y6GKCoJ6zW9tEhyheLGcFtcVRVgkxr122wVxNDUVj5dwyoT7rxGa9RzggCAzLZuKoXu2TG3znvQRW3RveeuogDc",
  "key8": "3DXKmSDyY8EQN31aT5LtqJej6YrrgQNQ1QA7RkReXEj7AKnvb7HJwyrH2xjGipxJHWR8ttqW6LCPmWgY1ES4LRTM",
  "key9": "mc2t9nC7tHBX7PbB9Etwx2YK4TG5ADKRDHYNBavnHubuqbNbgENrWBiGX8CLTtH1rvX4gw1xyiGcNqxtikSxBMF",
  "key10": "3JdKmj9EYLSH1EeFsa1LPKsf7indBkD4RLZCZaLMTLhEcnAVvyhY7V4baZMHfnpfAWBwZHMVJm324QRWEHa6oqvh",
  "key11": "22DsimVZmKx9w9rbW7rg3MCXkTkdfbsTy4BdEkWtAuCPbppxoiXHfxkqeqFrdtPGdKsbTxTuJ2kodcE1LyLGnW3x",
  "key12": "4PGcfdTRnR4cWDzA7hxr3eiiuCw8BqojEdUcA2gCYK8zLVt4RLDJbwwstNhJMQWJFFujvmLig97Skc89wjyaN98e",
  "key13": "2QFkUXg3ESGUvkTugYRbc3RHekyP5oCRxVuM5ANmeyUjhEibbP1dbxDn7nj3nckXMuMXQhst3ie36HELvEXooN3Q",
  "key14": "31nKDCNL3uFTunAkov4sCVETzC8RdVSjoEGCY1mao6sEv4oNs5DxEPtojDGvXuNyQUGuWFx6SMFmFgCtearCXts8",
  "key15": "2wWnUgrF6rxGbG8hEuT4aojfVEEAEjNbu5ciKgpPwJdAtpHu1QHH2jMLw3qE2iDvupmfpu8cnoSvTRPLMMKT8237",
  "key16": "2UD7xM98BrfY1CGdUumAnBATAoUyeyfLtkg4vCfHwhYyG5jrpFoTLZu9TVswuNW5c5F7NkcD3CcVdYmsHV8DHn6c",
  "key17": "4AHVPogKymAQsTwm1pHpi9sLqtfYYayGJcPgFzExiBetd53pLWuyE2xeRrF9QfcDR4fZTRUjNc8j4pnYhygmx4o1",
  "key18": "X3vT5WdYSoQtzGY8CQ2SgYbwwMxkbTRSxCSmciJLSJwmhW6yxogKHcuv3RgBVbMeQcwLAG8aaZdZx7bu6BJsVMU",
  "key19": "MRfbZyAr68SbBRw39V7P6bhRKXugtQBQz78SadBfB9irSF1dR8SAH2Unq5NviFNnJSPUbohEw4yZuu9VdcVNGsB",
  "key20": "RstbMpkng3xjNRBLJXy11Ag6zurYD2MP6AE8khSBJsteP3eqREsJNqCJrbVNWxxS9Kk5Jwd6rxjFGJD12q6EA2E",
  "key21": "pGCAzSgP9GkXasQj6NPgeQLzX936okgQhQ7SGmJ8dAkoU7MfpQhPDiJjRMEcRNgRqLHCNN8VLm3jXy7q9afR7rb",
  "key22": "3BCHXx1HF6FGLR9zxa9K4sW3pYE2yBYDxKdP3XhCjHNj9GecPk4r1wdBPyqc55yMmgLkNA2ynhXAm5RfG1dEwsBU",
  "key23": "4FPfhTjdDDB5Xa8SSyzFTjd89XDXYbae9PcBNX1wbKt9VpBTLBfN1fV6uZP6UqYfzBeM7uhYA8WFyFioUkonKnuu",
  "key24": "2aVhZBVD4LNb6pgpefAxD7RapxDd3rawvHTCULoLfKERaSCnBLxGYB3eavu2QDd81uhmduzhLP77ips9FQHijb5m",
  "key25": "2NsStsJmaFoYPTpBYHj4PMsZFGaM8JqHgALiXQRJP8b9H8mJQvSd6x6TXSMUntW7dseykx1cj9EmiocQWa3QXjds",
  "key26": "3iiXQMegUHY53WpwrX7Jfi1SdhmXoVFGbDeDk81YpsuuVUbPCVCqkGcna7bj7W3Zr5uQHwSfRbeoFW7usovsFePo",
  "key27": "2aEPDdXgih1axVbjW91nV2nGikvqFQiaYLg97yBNGLjdsfZoy95juPQv2fZ9iiEXgHaWjPeedVSTrdT1ceVAVdyo",
  "key28": "3pR8CX1t1XkEovb44fCcD7SKMW2AKGsZfgauR6rupPDYsWhCh9SH7b3VTdtMBo6HDM89TrGfWfVA5LRo8D1UwaGJ",
  "key29": "5QfQhTmSDW13EF3mLEVYKEEfpoBcJdoiKLkENXZGWAJ5k1YSUYSC91N3JxUELusWnJqELuuQcGQPNArUTck1o65Z",
  "key30": "2a92HSq2UdDPbMxgeCQ78NhRRghyZY7FkW7N6y43GarQSPEMAJZvSWtjLEup3TxU7axMujCENW2YeQxVCx1r7qvV",
  "key31": "216yBtiN3c8Z7d6XtkdMzZtbfimjrGSdwgiuPzN54PTs5Tpna4gvmXkjiFTmDJQEMLitx7r5ygGo8pNfdohJSKeT"
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
