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
    "5vkSLGMxS2vbRqcHTA7P6ET6ijv9FVnvnN36oq1uinVZ29SdAEzaoLjomKZ1392G6RFYQt94Mnn2mQxeejyhkDTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "412uKKy7XvoFrTBPqxDt5dgxBhr8sMP1qeByTM87JkMWVWBaXeC98VYZHau7cFqR8yk5gpaQB3JpAxsxdXHUuNus",
  "key1": "4UxPFtseY6HaF3e1sqxYJbPPNariZSbArPAhLHc2RiSGSVymDLJujGx99vrvxTk8D6XMWZrPahCTMCBUkFUfPW16",
  "key2": "5jJvWjJf6anUxf3RjQjEfxa1NnkFGhCdp1yo1Ra2En7FWk7cvSGMtiN5uJjESW2JSSGR43kKFiD4qwiUJNCicGbD",
  "key3": "3wh26w8C6pWbSs7yZCftY4twpQVyHmVjjPraBWLkJ3jLDYQibgp1QrsTdk5oxKy4LxFHvgBrw15jTB3KfbzqGqBv",
  "key4": "5xBHoj5g8xfivtCZtt6yXYzYKEjdLV8W7xqe1DV6kwv1oGQXLewyq4ENGp4jFxDuJoTUWSSWhcYYZepdj3zi9evi",
  "key5": "2iRQm3qPM4Wmturakzungn2PksW5edgBXqWDSepvTFqoXyTPRCbTX7qshDLaFuFUfQBqvXPDH5UZrPM2pH8Meq8h",
  "key6": "4bjWym7zJXacBhPJaJhwjsDsJ89NCZAnVPF51Xe6fSJvXjebs1h1r1JkU6eeWfjMvXoFdbfrwHyDRGoudBUHfUc6",
  "key7": "5HLyDjB6nKt2YNaFmWK59iCq916ooDgzao9KsgNv7hTAomibKtJzyjbCEVt2t5p1rkp3ZGkRAs39jQXAJwXDPyHE",
  "key8": "2pM6FvxFzpPEQBUXQhnDoWCPYQdY4ee3327faperzMkYfbDH3cYUnPHJWTb7X5Stvn9Ck76ZdM1yWqKKXJXT4vbh",
  "key9": "SPKsJkU3ckitrCCWKxCVVFTipAV422wRacmgwmGquKePxTohuWWpekS2anMgaGtCcQH5PqbvkjXPTXEzhF6wiE1",
  "key10": "4KAVBDxcmU35M7WS4LmeQ94yJ9YYJqXiokpWMpNirXwcpnyThLKmuqJ2yUhVE7FWFtSW2bx8VubtQyn2X4Mmh3a3",
  "key11": "2PQprCEhpSQB6whRRheAEzvLkM8YpHJaYosSL8T77D6WSBJr8WWhLEcXTVVfcTb83kZbwge5i717Wkg5Z2m1TVfY",
  "key12": "3Nqm3fCmgfGC2PCDb7GCAsgSi92NRxXQzF4zqHr97QJ5yEZq2dtAkzFcmboQZ6cL6vnU5Pwtg3eSFGyGnS8TpGUR",
  "key13": "3N1Zfn9AheEtc5h6XGrbBNBf4fFhv9ueXW68Z5CkMQp2yHn4cf4QrLc3Pk7BieFYi9G7qUS3UuPw89pw9Em5Vich",
  "key14": "5K1eHwK2nu622tvADSXSC76Bzu8gTtJodkz1VEV5oMLYbYYvcmaXbqzPMdBtht4dVkQcpXnqjT91hJUx99tHbkT1",
  "key15": "2rKRCUuvkxDjNqNxoDCSg98hhLyboo1PPxECKYhBJLWXzVTrhZzoro1C4e9PyYzSZB1HmBgDpTgaXQmPCyQcBUgc",
  "key16": "5cLM5t92RSfiS7tj9LPMyr6B617MxT3AXYpQCR8aut7fu4pAAvaEVABct8noKXfdBBS2V7u26FacXxWrp3KjoHqH",
  "key17": "2gsPoNCNcNT2XSYZzkRLbf8vz91xtWnhtH8Po66TVQQ9tYAdMxLmC3uvrZ3ZhG8JrKk6eRR7iQmCdA4HBFgywQrK",
  "key18": "jhwoAastvAv3xVm7XZHyskJETPq1cEJhZqPn4pp31483z1XoVEARg6nondS9aJNV2e5jqQmZU9FivwLGAJmW8iS",
  "key19": "4gA7ssYzHcmxQUPBV9MUzQ8JYXYt4WZkYf96LeX8znWeVQ4o63Yjk3cZt3DJhY9BciMTA5PQMa9jSWSN2Yapmhuw",
  "key20": "5LvJGbJMUMZNm9TCtPCvPmzLCAJpsLUYfMGurgTpdjE2KL5UBpGbRKwaEF9iAd1Lkv45YC52kSP5ikdbSPRscjUL",
  "key21": "5LqcwFQ4nbfvnZzss8yq68e8oeZ4sib4goA3DRWQHvjNi3nyLe71ESzg5qo2LntjpqNU2DChefighBZKXgCaVRXN",
  "key22": "3oMMgpiyW7AsijW2Gdms81FPoTMyFbxSxESErNagyijH3vKUGNnr6iM7JnSK1aQJtvp7nA9uBF3LLE8ZZ2nAEwK6",
  "key23": "2eHPkwGDRBgQezJpj1sfRcMkeUiB7t5fZaL592W7LHrRAsxt1pa5Ery8Fk8b1t5q658dHsufyfchfEBjkEDPoRa8",
  "key24": "3815Qg8TMHLvtKvbmSQoEfEefZ6ig82DQ9Zf7GUqGzXu2BjxaUhaQvNF7vBKQ3bsEazHbQfK9ymLbG3TffLScnyb",
  "key25": "5taPzBsqT6X5X4XBDrvbFux4bpNK5cCEZQdneu8PaAUErCExPbA74v3USkgExqqKCH9fdX8ssdA5WfhT3Yat2fPg",
  "key26": "5JR6PczFWrMkxt5UYXECBk9uCiymDw2ao2MFvPQPj6MYuF3i1BJpsiz51W3Ez2Qewq4TTGKYxGyywCprCSvwaUrK",
  "key27": "4QxGs1p7TVqLpzpZyVKhxZq1duEu94KdXeZic1DEvHaV7MKs35uyiYPYpqVhhS1XUET3bsPq8Du4WfqrkRcSY648",
  "key28": "45Ggzx9rP4M1cugsLB8Laq8wRhNaKotoWt4WAUFzXoXgJY9hHrspVkpw85K4Xz5JhxVEKzEoekV9bdfpj4zXKHfV",
  "key29": "4ku2eMRNUBdte8MQn9YQUTAFB2WjCkwLo83ipLLgZisB4r8BUzB8CaK1NLmR9RoFMBHvsLnW3264GcdtFSrnaWHv",
  "key30": "4gciMnoRv5Fy7jDRKyf4YgWK1vkMeHUb7FhgtdFfpd1A9nibrmsctGszi5VXye6aCjDHXn57T3AcZfrQzSmkx4My",
  "key31": "bMLNMku8UyjmJYhJmiMMtgUboT2r3dRNjxvgautDDHqw9vb3rjLazxSB6N2VcmuXBiKJpBkqZCS59ErRjk47tcC",
  "key32": "4PqemqZ2jazxrHfmV1fyWvnwAh95AKX6Jf9abZhGZdVp9MBXdBhPoj7R9PWdJUGZAA3dCW5rAbpMGU2sjqE65zLF",
  "key33": "3S64pjNsjcWkfLUjFkaTiTiNCX3Ci6TUxqs44qGNbWGx3oLnha247XfrL6Wed3faiwLCc9mTJk3MMjkUJYrbdpwR",
  "key34": "3KYg7n2JkoaAwtuWFEmbUkh3XcY4ZR5MfP9xa5GoPGT8i4b2J7GkTimS7RXvThKeBgo27XBxqiAFHYuScnGwCkZ3",
  "key35": "4sjW1h1hWNuAh9QgdQmvMKbVdU35vMfJbHNfhHWdL2QyFDhM6odtiTDe4KptrV7z7hc2txxQ68v4k3jY8zwU72Pm"
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
