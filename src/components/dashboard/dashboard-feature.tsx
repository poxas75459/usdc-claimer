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
    "4789CrNtn7XegZK3Hp4iBjPds13d3Gbyq9GnanBgxam2kYhhr5nMWqfmLr7KHC6mMJ3s2gQremi51GB5SYCwpNsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TodX7tvawjVVfoj7xgvvvPGu6vRrhNox6P94eCReFH8cSgm85sEfNTzS6mPjK6frYAaxDRKU9fZjuFTNbKYhv38",
  "key1": "2riC5voucGgFapnmX9bAmpX4SUwDHANA75wr4RsYdKJec2DpJJCGsmbKDhzFYNvm9b8U2c5SKL5Brqi6HUGPc9Ta",
  "key2": "RkoSGrhgMkR8qgVn6hwX5b7n4LbJzgomjJDmQcbNwVFHeKfEe1Co4b5hs74uJJR8439adaYSWXzzWXBzVGFuk5b",
  "key3": "DAvrEeTnfWLD61HUc4SPdLj6FKCpwvSuwAXEHkUMMcBfmER5DWrMGHZBjAgozAhhrMaVTfaTgxnnBeJfCP5AhCk",
  "key4": "4R1exbnfREKBkpXi9k5TWWfLwUEZCCZBdHET6Nj4a4yqGvCjyuXSdx3eMTatHkbt988Gy4QP2LPgq83d76Xsvnb5",
  "key5": "48rMWp3E8Vu25hRFL3KsPs24MVmj3mASHZaJwhhGqTvxFbi5PoV4p9cUs2F6x1uVDyT4DmGkPcezxA3y15DB8iVi",
  "key6": "5Er6Du56FxzH3yLc6xdQCg3vTj82hRrp7t8JH8KXQgAAjKCgJHz2SDNt4zjmpb7P3kNQum9qiua91Caj5M1VeUb6",
  "key7": "5GXEee2tWQsRVGAey9EKaLvQyBgd92PCRPMgUgcRUxpfumNHUfHnNiftva3bPtwpbytGYfPhrvKgzcQcMyzB2FxW",
  "key8": "PUXRh4w2jhK5RTTkTMkneazdood2BGucDG2yMp7yhe8r3tL2hrro2JsdRU7uykwaFQPvV2dj3E4avEwKLNh6p2p",
  "key9": "5D1zmxZv9Sr6ohdsM3kY4qbntiN2iixgAcQSiTTJz874UWB4AZMXp227TwYADozWDVvBmccD7RkEeBrRUBZFzNcz",
  "key10": "bWH5J1hfJ635ipmayJ7nVNdQmcUpUEk3PcQS2EPWLXVwddvWKj4CbhkVy6CHQbiTBPupctynyy9DWBWCUSaabBQ",
  "key11": "QveUVtRx6qKmZWrdqAcpeS4qHsxvxe9dpDwfufjRb61zuSzFgjazWXrqcyHXBBusDcRmzEdaDKPaNtVp1Vaudwr",
  "key12": "3DtzPTAs6wnJsNp4eCobKL4sexodzrjDcgRkEF2DcfQLgTuErrnFbgQWzMPGuvjGQY9ZnE2zirPSh6rEJEvPfPkT",
  "key13": "2FrwYWkmCxvfzQeGZotxj8zyzds35tDhtsFBKTFkrrgFato1AWLcgpbUxeJw9rgRU66fEPASHZzPrGrYdsMUacHK",
  "key14": "Kcwws2hhz6inaUSQVT4RC5LNVSSxBZRQiTxgvm6934umdueFfMUWCb9ZX8L7XsNzCcLAK97sVLmKN4V19UYHJhA",
  "key15": "52SujGwJgb5fhvN7ujqcRun1UeL7PZVTp63NobY6mpf77rfCAcRaTgQF2rmFXzrgPe4yJmF1rSJjnoKbdSu5PEiJ",
  "key16": "4qQrYjZYz24AbvpWUvk5JjG8ebwYqY6a9rD1jgEby6gqTAcsCsozhyQsto62dmZ43reA3c8vcL79SPXM2VyApmCK",
  "key17": "oESfEArLgrVSo6RVPf5nEk9bRmF9hC5CLciwe2EmYBUjJb8At91CtWGTSov2xVs8SaVvdHq6SsRrVqcgidvchop",
  "key18": "SePHkhrMaBEEsfeQgMRjZg5qcu5cetwwvJCAGuXpw3fs1n3ynFfpeNsfCRpbjgTg5LE8UD8H3EEoawsMRyhddvf",
  "key19": "2x9pQT986aWi8BVbikSahRkCxA2rUkor5tiGipgvXNwjBykJf3t878wCEnHZdBHDD3tqBpt2ikdX2zGmDeuAS98D",
  "key20": "4ersrLP16dUTZZHGvFBMJANTfvPLAEVwr6XJT4JcrAgVUpHnVGKCWp1tNWACKo4FPZPLGJQVaMFibw74GgCy47uw",
  "key21": "41phbZcrHygW1pPuYxuqisbxe4YzmqJEcm7RPBTcrGVmJ6JA8zxc4X74qFMU4d3DvCYwRHh47oJKXjfmbHVJz2Lv",
  "key22": "2rSsYXjWoFjNQzCbqjTKsKMjQ1u7VrD9nCmYa9DcMrj4XnxztDVUyf98JctnJ8hgFmXZxoUpYPSKuMehMZFt7B2m",
  "key23": "25SFAYqnrDv2HryZzFCfv261777bVWx2Ujp4AMxYW8oZxc1u12NvUELv9y5EU6eDGJyvJiCctawD4Fz5UFMvA4Nm",
  "key24": "5sioksbog1X5oWALYTifXDZuu3VTvXjuRt99rLoNf6mYfQfJZ7X7r22GncpqkuMi1fMZ4zUguHnCm8keV1zVChGh",
  "key25": "5KUdKtxBhV46cjhsmYaquzoXvvAv6fQcTsvnv4YCHYahimu3ciri7Gdib3JNXRXnLhfZCAFn1bhJmWRdR1jBpMR",
  "key26": "3uXdUQ586m3wKKFYHdvg1K8anGSMqSX4GARWBZCiapVGQYCzNJZy9X6F3LnPv1KXCSwWiS6HRJvtqMZgG6vPK35C",
  "key27": "4hSQM3VWT52kXrvBFqnXQWt67RFyi1HByJ4cYZ7epwFocyJYsKvDpjJN8fHfrzjKVyQxAZq7599ZMU9TDNMDHrRg",
  "key28": "4Lewfnz1F9XvjpqfNCHEXmKRYTmAU8q9GtfQekg7AbksRUeQAm7aagQwaJWdZH1CKzjcjQrDyw518ANPt421THQy",
  "key29": "5BSmFt5JekJCeWmEJZeo5CkLvbo92gukH9J8rM6Z25z31iYyRQJG6pL6eh3chV8rjZiEhSKQFSnvkZTqGwybVAYb",
  "key30": "2sjKTEs1bptopkBXBGgfAiVcnGVUPYHuuus2ZSJ564SwdNLAnyr1qXizwh4nUovvW9kJBdgSm4jqBBSDVtj7Umqg",
  "key31": "cyJnDK9foygZD4tC5HWPZriv9L1twx1mvrk4Ka4GSq3i1XSj48TEaQCA1G3cgbyExiMz71tTrK4zbnNboXXr75x"
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
