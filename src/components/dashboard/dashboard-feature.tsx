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
    "4oBpDLULw2s3RegjRyBgbrZcaZMf6QAxf5SWsai7Hq2phXjy29qYzzXUTnBArdNN8SgcmepD6Z9At5FFBWC4ChTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSVHZFaP3WBXWfUhmaNny6xAqdaVDyaBSBVimoPkpRCYVt93E7WEKaBXUtrf2quiwhcHHFggQnU113et76jjU4H",
  "key1": "4merQ7UAPv9GLjyX7bFq98nMReURmQHfrxmPh2csad94uJvtN81ACVufQMrg8cHZVqZCQt3GdXJ1Vws2Kdv4VjHk",
  "key2": "SrxBj3Nvbb8rn8Un6FfFhd1CAEfzhqmygdoMsMBPEQPwCFhRv9mcXwctXJbJrEtNBKpihjhPr9S2MviAoJ9if8c",
  "key3": "64L4hhA45gJmMhcreQKBEqSNcXUncwrYVP7eiHARNqthvJWwgiZjaz86GEDcDAFqomGRSVzwpcocvXEdkvYxu4rC",
  "key4": "54ZiXgLiUfXHkdqWug19CtkKBVMMr1WF3TgHdeH1iwUss8BRjTKjzXdw6MGzMHMQEhJDAy84cXkvYa6jF2WunzeX",
  "key5": "3sTpCAf4cjKzEgs95gZ7QmqdLphbhxHjaE5m8eoCsp4c6pTj7oyMBjUzBFKVgadizbdRhU5a56Sh9FLQRRaPgPFs",
  "key6": "3LxxcmWfsR18xPMsrLXEeGqyePwpVSx8LiY7mVgZq9iQ4nTm7xYSUB1LV5wYJta81g7PUAUxLD9gnTszBGVWpR2s",
  "key7": "4RXobdwyZhz8yU4e4HJU9vGdb48VyFBUoxXxZwxg2PZsAHxsVATSqTnmynH6y1J29Vgpoxobq9xDQRPhgtFokECH",
  "key8": "3d5sB72wiRE6rz2gqSstzJbLCaBfJV88LE1fCkmWGzjm7q98QPMichk74KycFLU8m9QfAgGtWu2j4fRYz22n6nyG",
  "key9": "5EHvGZZQF5FvBt3urR3wUujPTcqjpFKu642Y5919utchX413PjxKg3wTHwGCMHtXEJy3EupupF61ZFFWMPrdsYyY",
  "key10": "UmiPnV1SUr7GFwt8omdQLdjPugEycVrXZQqTrJswdZpAttnuXLRgBi5yD9Si9fPvdCJaUW9unEmcFSTfSfLu188",
  "key11": "ufEbe1VzW52hdiMDPTNvM5KjYD9agcDrYwoYTY64g372xpP3evasWiyrBUYtsngRwqM9Y6Zf6wBsqb6GP7MBJzG",
  "key12": "2qDcXen8gMpKEWRo11P9Rk4fC4KbK8LxLoLXzd2EGLbj4oc28yDxhkdPDDqsLGfT7LWpYvrzn4USHQkSTtiv2DbV",
  "key13": "4XQHHxvbs26Ho6MUgwo4LMvL7MhKCzFDN4QBrjmMannePXesLYpZ8VQLA1kUPum7MVQ6uauGFiDgHtKvafGxjWrQ",
  "key14": "593uijz46kkQYjkrPX8Sbr15XGWMVhns673vZsSzB13tJMYP9r3RmTr51z5Xi6bPPANgsFozdgt68cpExKvNNT6k",
  "key15": "4ZrGKBdriDiu17hmaMTQ9sSj9n8p6WcrisKGLCZjhiRLaQ1r54AMDppfVDhe9vDPaUsSioVmbK5guhjHgk57HPGM",
  "key16": "2PU7zRnEpQBWYgH7y2voWCrNnF7LghTuM9tuPsNdVgYysZwAspN4LKveBEo8RwvzT1bBZWCak5G7ng3JMMe3SLqZ",
  "key17": "55Dh4KuYtqSTa2fPKeZfi8Lof5SMkriVTs7gtPcnLG1wcjLCDVR3U8uUPoBvwMoNxxdwLvDugD4orenhRMeM781x",
  "key18": "5QKEmZQydhqdvnvkPjq6wUftrFAS4QxJnpBDmhYSGFMA79iahEX2hws6BiopTBQ59FedTsidXcjeq6RLMW4qnPGX",
  "key19": "5BzCZwS5h6VBxFWFrNRGRNhydAqDt18AjLWf4Lb6Qi3BXLCRW7WYZommxvSDZsuUvNnUC11Gvq4NPVTuXENhKsJP",
  "key20": "3YeZiMXETmaJMQHjaMfZ8J1bRXAKmCtc6VZwShWk5dTxxx3JqWzmjDtKe8W69dU2mh4b6CiT5fvEvxdBjnT4e8Gn",
  "key21": "3ErYdWwYQRf8TYaUDaqgLA1Q6MhvJxu5eWWVCq6Wt9vtwvywjZsUGtHN8TmeZgvobEAURTR1ShFF7yeQzhArAzjY",
  "key22": "56nQsQ1DVNsJb37eyRxDLB6JxyuHS8f96CjEHTA6HWuPq9dyu6HFiKs5QNgXYYWfjBNYrVBnmZSmXgBFjAJJbUZE",
  "key23": "4kqXPk15biQ1ynxzQH7jUc2z1bLuUiWeienpJQ2BRkcwLwLwKcd5YxTddAhqmo3zqdrQMdgvBqeSS6NpXjVmNzx6",
  "key24": "5YL1A8fybV6Y67uQisw11P86eRCV6uLxbXAwAhmWrzjvUxnXUMTG4nisV4F63HfBStiE7pxQ4bzuxkRpZFNYk5Qt",
  "key25": "516Zdoa45bzKLSDZTyMuyPnUH4sCD1qnXK1hLv4tigyf81huwNjU6QUaBqkbJpbAyNom4sSMNuZxoyFzaMHwyqnF",
  "key26": "3cS5eHk4jNzdYSC3wZFFtEpjAvhWgk5iTrHeHd4etwuVy2sx8dbzxSChXepefudD8CSCtaFDKhFZW5D4fhXm8ziE",
  "key27": "3aC4xUqgHfXMk6DGxumHQvBcY1dwfDKt7KjL4bt7BKw2Ha7fZbCMMqUF7kRqPwjRa881UepUjhoHuF7eAYwjptiA",
  "key28": "2VhKfNtnYbzkYgdXJz78W9yHcCpoEnrtzzZ51utJz4LuJvs7sdZfdqmxSbDTsp8JeUhSLLEJqet62waWZ1Er5zF6",
  "key29": "2rrifB5ghnMgCqtkmyUS4LuAJStnNkNGEdXWqPove1HkXzSDs1coMxLGzmHxAygpBYb247AydUoqMfJ4YymLVW5M",
  "key30": "3WMZ1PqCZmMjFbtvwoiu7sKcyrqEXTgr6jAurkq8NPmCc4qnrDzPixS1StzHurHVCFJsgiH5u1Qrz8Wdj7wSeuJo",
  "key31": "2eXxyTPHSHCYfbHZGXnaBPP4bUdXmCtt1wCogBmyW2uhfExZ1m7cgzoTHwpf4ZK4L1tGu8ScJBJ9TJCDnviDgWTC",
  "key32": "3frpDMtdaGSwpF1aBQvJgg9eZonz7W6xLYFmeva5fSqxmWNdBKfV5SVB1CCtyRTcrWJENdYByaYNk3deGwDzEarV",
  "key33": "4H3bKog33U3HnVGwF7mbkauS8gc1VnK8zMAT7n1KBgNbCyzmzcukGAH2RzUk4p9P9mYVtQsQXZKYTEWVQesN2unw",
  "key34": "628tQdBDJirKorjeKfPRqW5umnUa9YotiJ5G7WM2YRFjEJmNk54vfFrhHd7go8muLjxC3VJJVaQ7PZtvh9G9g2Fx",
  "key35": "TzLtdfJFv5uCftLjDeaKUPMr2eu9UrV6uMHNieiz1G8dCp9h3iwMqXj5o9thLXq9GqykWTqhKwFxKNACpkGdYTY",
  "key36": "5X5kBW3SjuYk4FWxPZXDVZmaMjdfyYQqfYvmZxosPQKL2FFNBM81ueSkSY3ws554og7jPC4oGTtZWDBUZ5f7FhFL",
  "key37": "HRSqH1FtGDptQpGQQs1asRBq5Mg77YAtKMh2jnfUokSdMqWBX5EPjjnoWJ2XP4zBuxxseQZzf2fzNcevP1p6UQg",
  "key38": "2RNC2o1k3vWPBcNoZtwi1ivGqNoF9xzx2KXz9npRiGf9eTjkzgL8v6WFf2rtJ6eZS5hY2KNQV8Dy5exWASD2kvac",
  "key39": "3cjsdhya8D6h9hRn7s9iB222J2F3xCSVaMBkLkVxfiND5i7jypAdT6Xxzd9JdvqZgR4Z3hEWuE6k1NfZDA3iF5Qx",
  "key40": "4JjC9L8rfXMrtfuzHxQqxbVy1Pkz2TPnURht5n2oLXDghgcLc5QJHRdbyaWEJNB6epbQeap8NBjDDptPy2rvwjSL",
  "key41": "5kZDXB2TvVyrukNNSaAx1PR1aPQvmkPV5KTxDUsNpxoyKvztL6u5GvjB59sJdCdSMvLbxXJkjuW4byL5XitWBVae",
  "key42": "3S7zjAw5853j6KScJG5auAeug56yjtuW1bgjPLQ54XKtF5fHiNxN6zACx6e7MnjC5skdozWgNmZRVYF52Y66tyxK",
  "key43": "2npj6XypptGT3cwfJonTPmmtTWLmBZFAq1gzLn9YF6Cuq1zWi5DYgZ4ME9pgxt4XUajHU7eqqfq7w96CaHM53BVc",
  "key44": "4xnxYEepU1YMzBjc9XVrEYiqGACePDe8Fb94e41t4X43FKH8wo8AiswrNhn4yBXVrxy7hcsv7rqjgiiZtaWX9eyi",
  "key45": "4aPP4NELfA2rak3Wk6faeSPCNsZVq2hA6DWVMgaTRQyNSFdwt1uWn7kQLCy37Ph5uVXKCmqoKXatUijquTk1SzVz",
  "key46": "5fKmfiB7Ywbxc9PhdFfubJ9eapMKDDz81AQYo4yHaa8c7CkC8BxT2LEiAYNzWaXHWarXYiQezVscU4itKy994VFH",
  "key47": "3uWqMdyaPPN9FzDv3yP5JVqH2r8rBxUNJAoNAa1ieTqf5jp2ueF5tUxULSch2qmbsY7D48V5Jjqj7C4trmuCS5Tg",
  "key48": "UE96NPENyzNchKL9LfZUFLbLzsYzEi8yJppGSJwYniVEuFAErLQMEaiUA4DNaZSA8JkuYDmiaaEPx9WFveh1zwQ"
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
