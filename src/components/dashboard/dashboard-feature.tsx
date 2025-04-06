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
    "4112xRipaNWDZsBCjJr7gFqaoCXiCyFDPCj4Kg4Wooh1Bz8ANaPieEELQkaeKJM6xYh3PKQDu9K56Dw5w5xNNwZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377iyPeNpaNFCrgKGGVwWGBkETTNEr93dFFxfYJWkkLBRD9BS3KeQgyabUhJHCwPzdSHJuXVdCQmutsKWyCK4eU1",
  "key1": "2oVS4SLzBjASXKHMg6ZxcH9S5voH7fyhmXakC1yhA1GzKiD4yTtkmVSLw6iWySueVVjAkg1Hymfz3NRwnAFiRTh5",
  "key2": "5MjsAwrfk4iVYabdNKAjJbcQhVx8iedMiHk67wMF67ixxs1CjxVYVBfTZ5ip6FysNoFGuQ1yD6fsD8K1dpKK6Sf1",
  "key3": "5zVZTCu8fJpznxuEDe3zzRUgBYSB8iVnChtbavo9G4NhSz25WEr8gYxUMp9a2FZP81odXSLfN8NAGtiFC6BtShgf",
  "key4": "tEtisHrwjY3VhjAjFHipWWpdi4B1knUyjnjQ6ncRjSbiFudeU98maKKkJ23EwKnmdeSAYudg8DqYTrXSnta1FX1",
  "key5": "FNxnjThXLCkeDnXpptCHDJhsnfqwJDJVgjrqoNDjmNfe3k2pGMF5Jjx72GjomtjepCRhqYhpv5aUFF6HyPWsqBk",
  "key6": "6PqtkY4H2USP3en76kMFnyGRfTf9JjPdguxcK1nMPuvN5v81GCBa2NtR7qjjXhbZ9y3Z1N7nEDXhZ24H6FrjDjG",
  "key7": "QVx1sBvafMKXYgBMRJ8Rs3GSYwNEk9vvi5creQ2NQ4ZrzmMYpHsvn8fSNw5inWkv9fjGyR7vp5o4ToeNut4JWHF",
  "key8": "4Z6JYgPt8EYRkqXnWBaQJB7taywAdkVmMbv5aantW5HEvkRygdR5PeTKnF8dp37itm8G1UHMFAnEaddwuZHXbhRa",
  "key9": "n3pRH8NwpAhQZnRVQSXvWXdoMHjyiaFsmP6j2zgssS7srdWf6ouPH2gFUtCjvDUGuhAwgGD4MMfxaxc42TBVGX9",
  "key10": "5hGdbh3fwsQ4iZdEjz3yE6popU87Uj3XrxyaeDakw5F9oKyN1iWB8gCdj9DxaLEhuCJtVRT2Q32vA4uzi62Mjgr",
  "key11": "2ZkK2eqcbK9mEwETTdrHx85TeApp9xBuFJpGY9T9FToTP6eLfXJMmTv7Z5E1zEVr1bUaMgVApig4W7RgTSLgMAYx",
  "key12": "2EmZgrFwE6erEP9MSDtFATidY8ffNusjjR7qFXTgbd7bXbxraD593So25AvvzprajxTWCyRiUyTHxECukNCpe9n2",
  "key13": "5gaRMejrWBcxrCJRsM1w4jNv3jL2Jb8zFCFPqEdry3htsicYVeXLYzLYRe3dWCchzq9iw2a7qhVAthu8aAfArY2",
  "key14": "59U25UvHm5v4ShPebNXiwAC8cTZT8NraXWc6CV47zkEdSKpYzbR7h8iwHMUmhh5wNKoMrhGmiDG3JGgrEkg9WQxc",
  "key15": "2ZgcwFC4KAB6LfpGaXSb4zasvCwHXUCbdVtNK4vukqpgfszFUBrDupYQjXc3cQBGRLG3975m38ftbhH6Qq1vBxck",
  "key16": "46YczaJaVpY4kRJqY2b6zRimZaF3mBjH53VqPwwZjr2bnjGPL7SrBGkNKRtYxvLEJE1sFDsuh8BYoYC1GKRXp7HM",
  "key17": "5pwqDjJodo6JERaMqDsCi4wpDKFKBCaXutbQD4HgvyyWxCdbo2AHqXkiqHxcneSo6i2moKmyr7PD3BMtzDSv7a1C",
  "key18": "G3NzankNWQQhY7WAum8y1vAqfdQZgtD38ohzVkjmTfZDNnmJcjuHfzju2U39Fy4xqMGiX14iYEaNqbbywCjxuES",
  "key19": "3zwQojue5dM8eDKvncidoaStUoMuQBFzyPAAbFB3NYzUjCgeXzxFXg9saQrMxqXgr1sPPxXZm2G1SLxKVz1bHwRm",
  "key20": "3C9Nf5DzxQm16x27XjVcp7pGq8jQGukx6MEcsbTAEUAbRAzA9jgVgrvFSaxFoiQWAxQfosGXzRtT1jRSNaHs3JUA",
  "key21": "5warFiEcGg586narLTNX1ZJoiVDod1Lnatq6bwhFHqRKWQ4GcoWjEyTDwWoVHTaEpedhubcFMGQ5vRkf4gYNyJi4",
  "key22": "4teVkZnCo68FMzcqdcT6823dTb67R9tT9L8B6Z8MkWxAkiWbrYkxw5SY8hdEULxBEw7FMnDS4BACEUNEXQvKNVwz",
  "key23": "3ansDaP8EbaK9er2ZHMijZ9Pgq8E7dQVPxg3qZuZw4jKLMC56GhC7fRwq3jVjXWnubWHaeegWyMVqhteTP8uC3EJ",
  "key24": "5MKfEMUBHRMZJNdseVVJ3ST2oMynrjBDNXjau48N16tN67hG9aMXkLFRU8ro5MaVD42GqvJgsfiUzi2UGG3hqUxQ",
  "key25": "5UWqhsQzhZzapwhEvYP6k4oN7w7m3S1ya5x2uJhmX2kYtqWsWidLJQqb8c8xoPEnMGzTQR3knwvrcmtoWQMBAvY",
  "key26": "xEfMoU6smxX522ELXBzRnW5CtgaobVmsBS4EwQyW8CxZQUBM3fvi3Hew3kvtZYvD7v52rRmMbkJSHXJjDEbufsB",
  "key27": "5kJ7TXKmPCoRAxYxe4LtKYWyW2ZvU3nMiQBx9sb58bJXAicJQ2MSgHR2UmAsx75xyjmTp41q1BQCCV1AAiPrwqKc",
  "key28": "4RoXq3T6LbuhtJFD5wAbHX1M4B8nm7RkYvnhhc8p8EHyWt1iGNf2QP6Xmom7vKXizJ9Z1hkcXV1RNr4wrSkr8vWk",
  "key29": "3Jr54n18k9c7CwfFsdSScAdHSWyzHGs2aDtBKtcyAnUh2kGT9tEMmSj6LZZCNKubFFEbV9612SRRHpJveFCmC9Y2",
  "key30": "3gtSKnpvWchPSftsLXBTA4DRwX1VnopAuwk5GRDV5tPszwMHK1bVxohWYdC5jAFepSUuwqKzqrqZ8qQcghCtAWrE",
  "key31": "4o3fwez4Uv4PsfnCh1JShtTspezEGSfi3fDVMNGZ2VoZnQAKrAVNcc9oV6hkkzYAK1rW71aJzBze5kz49CPw5sVr"
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
