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
    "MraxYV7117R3TDhEVxoPHFy9p83KkwrTXFwHJgRZrDsiqiBbXQYYJrfycCgae8TizR4eZrACFx36hB29LKbqn5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iTxniYhyoMRed1B6YjbGdxzq2t7NzvwRg7cuJ6TPiN5rmHwok3LiUcbrwTy6UDcjbGMfJiQ3Zv2NfBxuv2CNjsj",
  "key1": "4JHUfGCU1ayUX9NvuFgmijWcrbwBnzFGZB9s8XmPuU331dCJdNczkuGgF9FYiTUAZb9DjnRedjEP9UctMLwnusfJ",
  "key2": "2ATvt1Xtdeycf3dR1WEv6ni2hfWZt8NvedFnhKqEoBDRtZCjAjpGqRzmTqqcZtCvuFzsHMFfEm2WWCeXfBgZ8Nve",
  "key3": "wLf3jVqTGCExhY6pfcAQohgUPCHrwp2PkJnAerFGTEfKtyYKcBhTJLK4X4skAnytHVYZwvoPJwHxaG1RMKZw4Mq",
  "key4": "62z2TGTn5vYNTD1jmCbqssh64FLbhrpC3mAFVuDfMmnGZiUavaGArxA1MuiQcoB4ijfLBQN6WaACvDAfKW5XNtJE",
  "key5": "4byDeYtazgCfwMPDphr47AFnXuXQ7pEjPanwCVFaVaKLuMfs58drobX1YehegP55EbH5AKfAiEcaeY2Ygnf1ijqE",
  "key6": "3KY9xF9Vw9cDn3Tu6Lx1mVjaQnNj8sfUTrHsEx6kHXZv3LcHMEaDdjL3SDnJyRmBY1bqKWkk4u36sYoNeKUcogbe",
  "key7": "2VmLFEoYxP866yKmtNWb8HssmLoGquiJdATfemKHQ3i83AygzeZRp7SzTZkoeFcz8b4mrqJMdnKLopm7CMJgcM9j",
  "key8": "4Yrorm4PqucqPuVggkJApB5sFQbVe3uDXpz6fpPsbsyuu8gT2RwxUmLynbjktt1d9m8sSmQciLecVSw69ANTu7xD",
  "key9": "dzcgKMMzg4XDNRPqyCPCnyaxfVrKM3LNRFk8soJyPxTikqoUsQcK8PSHdscQd9ps2yfc2W8hzqsmG5a3cYmFhED",
  "key10": "3bdc4QLi6AAuUMavrMK8RcqEvPbMo1euzbpNXoYiSpZayYSMTGCNZb1z1aFSwNZMZDhCncgz7r5VqmWUq1vkSzav",
  "key11": "cEbfCkQeuMbhvmG3LT4AuxP74msMoJB5tEcbBNzXQCHSM8GxHd779xL9NHhjWD5CT3pZVKL3u6uEchqeFUwWnAy",
  "key12": "5KjFk8ZVaR4PBcGgRzhjrHbuQ58zWzSUCmudrQaC4dSkGBmDoJF5tsHEHDyMsEvtYVhfdnn5229zZL2PfmEaGMhr",
  "key13": "3yU779zqdPDB4s8jHpvKuocfXNtDDncUsHpYtEPoLTYoH9VnwboouV6tYE7bWH9uFEc6WuQ8BVoJCqLf7F1PpouL",
  "key14": "5nu9hw3MaGyGBLB2iuvpiNx3yZVau1QAPJUFs8YEM1ZpaZL5KceJcTRLHnhbx9bHL2zyTBMYaXuDhMj3Huz2d8yZ",
  "key15": "3YVABXpzpC7NLQsvRD8CyQFhcxiV6Ev7aFP9M8htNn1UyoTwYKfU83dawk4dXsnU49temmHZpkeP1EF35ZbgaHmQ",
  "key16": "5C6ezPALujgXFnkoGak9Ma6ynq1PWzpYcUnqXzioSotKJm8KoteRoHB6bbspKHistKDQAieEntActLncaZdjjwLu",
  "key17": "2W16nCardsz3tFj2uRYKArdSYkUuXZa4gbu2aF5MkMypJ7KCQqV2UEYzG7qbb2EkYofiqy47kUYFsu4g8pzbgAYn",
  "key18": "5sP9nxwqcS5m5KTqcbpAx372UGPCLAZ3fwk8jcQHnw6BcupDrLVFYstSsuAGnKjXJfuMTi9CaARUj6tq7RmFrLV6",
  "key19": "CxaBRowAE5vYpAcVNAT1tWRmicfJAVuwDsy4P83m5fzSReuzRMtvGunsVTW5YpM5bYm3J2puKxJiqw313SCK9JZ",
  "key20": "5Dyvmxvg3Vqyvo5hwJb6Qkcq3gkpVWbvDEjjGhbqQ2bRDmS42LwXuznSaojBvz9NqvYb8N2vJ3ejBGmyhXou8bED",
  "key21": "ejjYUE7Pyz9pgV13Lsr7aX3Y5zS7utPJSK4Kirsc79tK7KcaeLFC5KZV9RWgy556KLsHnhTF5pK6LUvPVNLaG5N",
  "key22": "2VD74KtsooqPajcpJ6Y2tpKojCXotMmhKdgV9LUn6GQezAie5ehKyegqBbdfL3BqZsEcetGdVoHFsfAyJiZE593Z",
  "key23": "2iKaGwLEi96myeCg9LtjaVk62Ls7EoBUYyRD7LrgMn1kR2kMEjUwWgomWeHj592wGJtvPMsynLacj4FEHohXtYdn",
  "key24": "4LAWvkQLh5ACRPEGB6FQUaCNBJRDRfbUkkt9oqBhP3ujmybLSm9ktc3kjdBLrShuY1pTkETndEhZkJe3ZsqMPiB2",
  "key25": "25QA8GEjorTaJ4jkafFTJEqdUNrhGE6jaej7NGPmNkvuinNk7iTi4BqsbgbxfByqVMmgKLA7D7Tf4XsUJe9RjGtH",
  "key26": "31kHrebat5Dz6e5X5871YNozfyVesPaTQ3WE8qXhseb6yxvrq5uo2hmuaBMv4V9V3NsBddhtshRBV14V6EnMUVvq",
  "key27": "4FqFborpgz3W3nAzNP3VTdqG7Yh4iS9ycYUbKzNAstZZPeeWd7CxiLWiHWYtteqmQorHauDQSLGmdPLFty6kPsJR",
  "key28": "3tqSkxLJBrJ5cTFq7D5gqnFVN5iYqLtjDsvtE2ePYfJeEQ9V3suKsNKik8AYhjYJjgzNvqaLpvsQxSmWFTDzvQzq",
  "key29": "5fKEt64h6C65Vw5fjHrky8718f8RQcatK2g1jL1RSezhYJTbcTs6ukWWM8wUEmuN2Em1Uf1nRmhtdgUGSLrHhj72",
  "key30": "31ByvAe7VVekvTynQSobEfQt6EQ7mcmSyqCy7LPzmDE4HcYxYeRRLWgaw3BLACyAW5TosoGYgHdw2XyBRDqnaFXf",
  "key31": "4Wi4PxNLazQRfCsqyRQGL8vb8dDBMsQcZXQGYDwgkSi5sA1NCXGsUxhfUCTe3J69KPobAsGNDb2Uk6zFp2TBHFBz",
  "key32": "4b3yNcaMERADRNmnHpSvexch7XMHTRUdhW2SHQrxNcqvY2PkW1mTVGueTTG5jfqJhBm4e5qZKXkazk3hmGy7Wmp1"
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
