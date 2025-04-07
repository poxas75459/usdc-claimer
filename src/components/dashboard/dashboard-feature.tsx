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
    "5Bzn3TXTRc153yWnjZeM9zgy8p8gXaKPwUw5xgTvrDxDuq2vUWjzTGVszTSijKFuzFQe672xzVEJUMbFqBYzy7DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzvxxqefamw8PVQTEZs7NLYvq2yx4Zng5azqL7YkcKDkGWNYDaXbg94Yw5H8ehKA7fXN5hmZjhC57x1GKm2JuDb",
  "key1": "45kLPEd8dTPwCmzPpPAThuCRT333qVVnpV59JYQqDryYRKRRfdHEYdpafYaWq7tPhCsQTqZGc1H38iyRbioUbN2f",
  "key2": "3dAaWvaok5iYArpjFgxrxygHp2mtjVYdruLnnjuN8XHRf4uDCBWrWcTkqwgLBoP9P7mC4hPkMPoyj7JU4XvGcJfk",
  "key3": "44JQWdo9W77wEj47vxW7TqN8eApwbZYEgpCJxsAWMD9GenFcFdU6cFRdJCT1rmYHuUf9GVWtQaaw1RGcphei1iSs",
  "key4": "559Giuzi9S7TMfAADiKhNkBLpZHWLdByXd477cmusuPnd98SdZUFRRpZy1K4SKLdgL8qXGTuKB6aecQe1YUkGoDo",
  "key5": "4cuTNYswHi9dbEdLdodCqdaxaeJHuMLUYKUo6x25TPhB9AcsQ95txLkEW8u39H7m5yJrpHHbQaV3xv59ktxiM96v",
  "key6": "V4hEzMaZxAy9Z7DpU8BrwGTm2o3ocki1uzyVf7agKFkohKGuXaGmQacqeeSFPQsPyK3XDmrY66Y4DDe6sGd33GG",
  "key7": "2Gj1UbtXNbEBodyUsJgEW16id9L7R5gyu6F1cj32mUqJtLP4MMtZrMzupxWmLYJWAXZVhqXZK9aaaVW2aZuR1GmQ",
  "key8": "4W3Q1Mnw6ChYmtajEMDcU6P3Gs9jXceE7pEo1XPht1fQjXh8SDjC86iWCezcPLjP46bBCSWahCL2nBt5iULv9fff",
  "key9": "5fdNrUuD6hxs6aEDru89btLPXy7oZL7PxwekvwAgYGbRNQgCTM9KbTQdxBUNvggYwADPpQYDLQx6cLwY4jpDQTTv",
  "key10": "3bba38Q6FNtA5JJ5ntabsE1DPGgd1ZEp7RqbYQ8f6yofYu3zDPNGJBz4JsLEKygN1LhaehAwpabq2qFM9Ke1zRvB",
  "key11": "471DghfV1BubVr2kW6xvhezkhXxQc7DtqUc34jHFKH1CL7VyyUE535EEU7DyG8b13gqGbYXd2c624CKzukWVpnth",
  "key12": "4ido6apW7vXULQXumD1t46tqHxFe316rHHkkCvACR6HqQxN8wEtZJ5ZAQbhVtqMsV4HW82qXht7t6XKXS3Lb2HkX",
  "key13": "LQkEz8624f9yNfasVzQvBxDWdDss6t1gAU53rrQpoEU4ikkWRU1RMTHUeVwpP6xSCvscFGG5HeunwgKLUwcFici",
  "key14": "45F7a6SZ4PriWtctdhfsFvL3TR7TM46sqEtvjYzuFZsEuSUCVeUkK9v67VJw65y6APee7tzaTZZgq13zcUD2PCTE",
  "key15": "2P4of8rZFGXjQ9sDarNfXh1FCUqtRpGCbSttxe9SMJp6AjFnKjAMah5NooFxkoCCgDtTghn7PCVF9bpptbJcvuwG",
  "key16": "64W19FaUvpnVafLkfhQ5RhoduWDTpqxzvVzUoR4PWeqDwegjfnbUK9V5qHjFJBATeq8sMqKy5YJ4A5v37fx14doZ",
  "key17": "3Ba3DvrjXoVsWPNVSMJCxNaiMyG6yohB4ppswvFmpwgsqQ8EwuCjJQ8qchdgJuZHvAoPdabZ8qq17GyrKXDCnDgC",
  "key18": "5mxFBABBNrgL28aYG6iS9HUKNwrhGkwdh5qP2H4nJaBsc8sGEywYgSifgA9tHrbzLoM9UhcbEZtWwpqg9z85zfGh",
  "key19": "2yKbrG8FViNF6PBXn5QMjutr58Gaz3tAsg7fyrmaV2Ke4tVzYsdEUsJwPm4LeoYDDxGcXH6JN2Sjv3PnegdPTJXd",
  "key20": "4wLjgcip54tPwBN91MPn6Ubt8jc3G3N9VM983Sq2niPqnYw9UyAdS7BwxmzpbaRD421DAsKVqrHiAvsiEeSVacfa",
  "key21": "4DrmmdLRaRp6w7QC9epQGc2fu8QR3n666zQYHhxHW4oDNv4Y1T9DT2LTNAJkKQC4vC8Qt9XmJTLtq8QpwJrFUDqg",
  "key22": "2gMLysjM1SL4H5GuXo7jaNcKtWSjgiYXzA3n4nuvk5GgyFy8yYGdjwyHksNuFJfMZoRDipthHvqCG7U2PUdsXjSR",
  "key23": "2yeYFJxrvLL7h1bDcXuxm2MjWKaLADtzDS4zi8oXe1GYLs3moDK2cEUmM6Vk9WinAzN5XQSdrEfMBeJYca5PYzks",
  "key24": "4Cv119NEbLHv1kWNRqw2a7hr3GRaV8QcVeB9hjR9hnTy7Ww1H2hp7VpcodvSwBFmdptFPp1VD2RZTpbbmexzgK1H",
  "key25": "Qd86SoMZ9NK5TX2drGJeS7ZWCntGf3hJhQCNefgpRt29iPVf6RKh8zkKJetjELAYLtx4YuCYNY4ebZWamn1rQBo",
  "key26": "4x5S9LXMv7nfcHuhGrpxSSbMf5yfwjTeKfseLLUYHqCDZoEvhjJqB7xN2Bgs1YD7DaL3U7hPhVauCwxa8tEqeRZ2",
  "key27": "2ZJcXkLV6s3JikMWSnK5MyMYaeVRw6ieaYNLWzKgNU2nX9svDuQgdqtxGzkstRefnXZjQsbvR5pdBe6RGFYgj16R",
  "key28": "2vsdGbHB3iVfkXXGvSqV9JBLh7FKzBey1RC6m92wRucgjxx8ZLKALGxxhBw8ReEqeFtzVfmEgJQdym13hFKxptej",
  "key29": "bCt38sPQAeDzHTAqnJhmw2Bt7jVu2AFspcbzfaQouY5mwXEc64j5h4KTMq2umRrWPCynYCYtN3H53jijsPmQMhN",
  "key30": "3xiEUf2uBqgHHJvGoeBK9ESkNuaWLe9R2ZTZeQVL5ib6gctQT8jZCuFsTyv89a3yfm3NMCU4TS27nEd4biHeovnU",
  "key31": "5rCGVHRve9tkCHnHkEpYSY64uwpZct7fWKTsLVUCsQFpyyDoxP1WsvNa5erBBgsU6iU3asDP6PavJxdfKGVB8KjC",
  "key32": "5LQM1otJFad7dzKZMy9KQdRz6FqXzKzX5eemG2KDsYYUpDp2roHe7YWqXn9xLSitbksdRaaiT95k19FFZgfut3WJ",
  "key33": "4Gb8YnpEbHbQRNRCHvrroGroHYW3P5goxLFEgGFrz3DYZ8fnz7wwWHu4FG2GKXm7GDouKtkuH7BwkpfdbktcoF96",
  "key34": "3XasPDZxUeGF97hHGh4ETqZbFbCFaBrd3fdquheWk7bidqNVfxuPdv6VsXrk6HjpQ6R9mCDMu7DJTaWpLuiC79Dd"
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
