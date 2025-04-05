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
    "3L5rYcdLx1Px9SBUiLnqWEZo61iQEDSbMJCuNZVLydMtftkJikqUCNso2vd27g1bArZCViJiDzRqYr5FVgEdvaEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a942LVPJp3LQfQgSxXvEsubeTAgA6NMJYFdXptScjVeRzVHKK1oKZmDYDnw4hB5oMcBeZiXheEzq6aY3f2y6ftb",
  "key1": "2pUB4ebCcv1MJ7S9FmTYehUeZmnvhxPMrf8bfYUPnDG2kV8NJoBBEGBVTbVq8HkX5Vn1jTjKfSDhtokrJafTCi7x",
  "key2": "61ntLb4uwyb6bBaU4Lc4rKPDHnEXFsHNyZsuqwp3mxNvW8n3enkXXgQCERBovzkdbtnyQ52wfc7MuVKkZmfCYcRB",
  "key3": "5Y1Sx4qvkPiHWFhnTkrCXqSv3KpPVVUF5zERj9oDLr4fuDCHrZzWAjnNnUvvzCoWYgNyGvAGvV6peD4n8boimyhG",
  "key4": "5wRq6NhHi3oxV9r5MfNz3qqJ6idvt5222c7YVUDNU8MfLhaJEHWwgeanq12noiue4vQmUiaEpA8Rp1ZoZ2sDsaTA",
  "key5": "2vQNRjRvuQErtEBavwxYKRhtDn99Wcje7B6MGvnXNcx1cpWmhgqnvpepFcEpCfZP6B2xaVU5pvLQvvygxfWYh5rU",
  "key6": "5cMA6xMXQaCvP73CEwQbrY1EJcrNaJNYqZJN99jb2oJHaTDz24jTVoiSRjUQcnZueCzS4Q8PK6RdFKgeDsMoh2WP",
  "key7": "35ZJoZnJRATjRoq18tNsTmngM6x5CrcLw8n6jzmdwduo68t74f2vqqmHZ9TZP4WrURZs9d3o3oLaAeTzUQ9E7216",
  "key8": "49AKPHBDHf8mQ19nY3ercbDekTiUD4axyXHYhoiMrDwtU9X9TiFvjoMES4AWqGc6dvpP5WCue2CmTWLrBuGNQmSU",
  "key9": "36LN8zFzEVVLsvVHfd59JdT3mJbhrjC5Ru4MFC7VRhkqPRNczx2DqnL8vAnqxYXCfB7xXi2aQkxJxHrCUAJrRsw",
  "key10": "5vbPqbB9SLUYdPToWyrbBkBjwnsfYzVyECjsmmnx8fbU7dxkNG1sYfDLKQByBiumeHbt7xcEDP9RC3NFsahZ92Zv",
  "key11": "42qtPkJwseDMt9CFAKxbGkvioGdkbFJPij1S2fEGJNfynEHYT87N6XR85uzawTzf1yUceNje8dVem7eRKC5uuDWR",
  "key12": "3N5Ciq4yhF8X8pburVhRqqiqVzHTYSMhu2q7mhmxcmPaKCtjMSg4gFKtGK1UmCQcLk95wMJ4zrPEnWPHme99dvBK",
  "key13": "b9a7njBprddQZ4stHPxKyvVtcuBgTBmWPHJfmv5HQXuP8d5BZuuf44QaaXGrfPNu7kJBw6Vj1aGSjEpDSyLaRbP",
  "key14": "4vPy7fXjvKU2rEZLdPGM8yVifKyUmXDJT333Q53dkqdNZ9TTKRCrjta5ExNYAkMWSVCnziFUu6wHxqJN7DQdaDm5",
  "key15": "638fYcmxZgbu9wpUc5pyjvfd433GuCEiX3jzGsbKEiJ2Z3CcqeY6QRJ9i3YLHkGARTwr6TVR2M9xfoMTzQM6991G",
  "key16": "27eiqimFBTEiRUBYYKCSPmD6DboqsZhkCDXC8AQDN5vQn7itEyRhSYcXVQo8D5n3M1FGw68NxN2ZZGsvM8x3Ts9B",
  "key17": "3pUb4JR5zape5hSRMGuuhJ6sou4hYCKQ3Afj5pcGGEBfBQ4gYuxEEibbYFFuU6CD4VCZnghLveFF2vxHfnhCuq7v",
  "key18": "5xJuZ2zUBjE6SQGdVsMPe8suB9NVx9c74vjCbUbvwBKSUhXsLTdRdidYHC165sek3s4Fw6WMPuFESNmLohA4W4pm",
  "key19": "55MLtdeyc56zYhauvYm5vvi1kRjjXFGeWMbaBo3nnLE7jh1tQ3WH5MEPJwJtwtdto3PPvXViGCdMZLARYcgVixHt",
  "key20": "3FnBBQiZvM8pcKzqhrCQXxAwvkWw87ZJcqEPPpdsfqr9CKduoEn74mn6obssnshVecgx88KAyn6vkKFGdK1yw79A",
  "key21": "5rF2jnF24n7fSCyX18ZZHwqSqiXcuNrPxHCcQrt7aYe72jnXdsZAk557NxBMNhG2DFCaT5yxgDh2Ve5sMrn7ZE1P",
  "key22": "2n6JpxEM6iN34wQv3dqjDXDFwQdvrsbCLiYpW57oDffrnULJ4LYrCL1CeaPjGvGtVczBoNTP9gNPhezXTD623K8H",
  "key23": "NfURVdXcS9wJxEgP7aWLVQfkcKzQvsf3ahbHdXjE7PaxT6k3tbZyrZUrZEHMJG3tGUKZTRZvuFqunS2RqZxUi3q",
  "key24": "2ds2tDunFpCq8W4iDsQw5jhF65XCFDM6NAkvQzQYbQ8jkLM7apDykYeSbHNg6DZmmW2s4AgvGSYWNViVGrn5kyty",
  "key25": "Ua8khCJQwd9uX4ZgfsQ48432vjSPqvMGH3wjf92BU1NRyzpgrXXQUBGyVaKvsaPPnJ9G5eDxnX2ztpkCRHZ91mw",
  "key26": "4VvhKXbeJFd12CuaT7wrzJGka68PGd4roquKXETriZkC7Vi8c5q7xArEr5P2vFPJK1NXEXEuiH2Lvkh9o5CfC6sE",
  "key27": "NPg9YKHr2V3aNv1hEDS1kqj93rRTd2kWT5xPAz3ZmpgZZ9NB4iApG9BRHAtnMhzfB2jvw2wYdwibZ2CsJc8Qcwh",
  "key28": "KXWYF1HD9QkhJK8qssyPoo7pw6RXvFXWVBMwFQJ4SvJLMNbBev5DPFRrCApix5xzeWzDL6Zpnt7Rc9RARtsh3Gn",
  "key29": "5fZJiwvLEPXJ2ykEvZBc1vdCkfAXYXCxBUnY3ASPeTDAhEc9wZ76V8cMm2Sa5W8HLbNogQ6uiWeRTDro7rqdyiRX",
  "key30": "4wBnh8pGBboHJPNnUafqMDM156jBuEChepq5r3jLCMigN2qEqamvHZoe5eqyWC7iTtnuUxPCXDArLGcYhibxYPDt",
  "key31": "M2t58DVYdou3bPrnRqbczt5XgXDjZYbMcFAF1dYfxVwGyUrGbrYdpp6n66WDbfbvMbndMowyYrSk4UKNBbsVz1e"
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
