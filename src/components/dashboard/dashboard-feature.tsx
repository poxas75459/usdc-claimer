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
    "EnEYy5b1m1BHuMRNiwW4jqb6MJA3BqFBnfHo4YmjCh7DLzjFdbY97ngJTHfncnkcJy41NQyk6kjrHsbKCPZphrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4AKq8AAo7Srfd12DRufPd7vvpfJdp32fNC7AmdwwabQoCgVkhSGQUyRL98DFgc8TM5zQx7kmzdE59FTSf2JhYs",
  "key1": "66QGshTrd25sYJbrjCg3p9zjdmxNpPFCQSPfAyCcCg4ymPJHTZdN7K9HqiG6Lcpk412TPrHZBeN8dgNdRNvUYjXn",
  "key2": "4rgCSWW4wrBaX1Eu2RLqhzkcn4Ft6JmJ1N4dyZMagh7VWu62kVi4ipRBKzUW3zEWtw4ZHkSoY8ZWNJxNDnECuvbr",
  "key3": "3oFefrhxWs9XjBURamaBsJQAFunZeQGu8UYP6AKxYt75FfYdQNLzTHZgyXFnY6upegJgkWrVZw99ncgvnvka8J3J",
  "key4": "2YXnF5ahoRc8hFqgaZAUYcSv6yWg7zD7DXP3Jw9B3gxbAmWwLrJnx53gMPAZYrog9ej5NtzznWGiBPnAg4guVZwR",
  "key5": "33f6YrTStiXbJxoEp3DeoVfXjd1PsDE8U8LHJAhkpgPcjWnwwGGJFYkuj52DYg3r7WCV3KBoqtt5YAxDyrVWiWx2",
  "key6": "63DB5iUqXc35no6xMfNdsgee1U4DBQ1fm1G1759L6tkMfZSkQCGhET1dvnWTWqVXb1VUFBfzchfX6cUSDHwVC3pV",
  "key7": "stJDyorpSGyUS7q9P651263J8ojxoaXyV9QY1PAos6fvGhdMHxckDV4dRFWzm5YfAr97D4V9ARPbR7keXcxLhm4",
  "key8": "uXnN9U53o3vyq7gTWXadQMaHnzP4LvtmNfChDGpnPN9kvcTn759R2x2sP4DQFnhCzdxgEdN9r4qcTyPFKw6B882",
  "key9": "2RA1HicrvqFiB2gxHTQ31mu5eyRzRwAyzEpfNPYubSEqNkhUgjbu9PSFriiXzyPZtFz9dp6yjccEpRezTLXGiVqR",
  "key10": "27L87jXX8DF3414GMYnyHLUUHhkJd5c5cJCoBfUvYZF7rMAaNtLLsrwbDfbUwsd2VqyzYgg9dWVJSdnGeL5zwFdo",
  "key11": "3xtRWALfouCvCABBdr4bTnLYgAU1TjAwmNEDzKmhYyFA3RXbNm4AsQZdXfyeWLBcFpaAWG4V76kU2S1VGbeo2FMX",
  "key12": "4sJZ7bbA7cqS8eDNNnTg7Rrb1uWg7xrVhSJeYRF3LLQZyAgHTkhZMSE1gDUWc4NYC62tbvqVfzVbHL3ghxpxnHNs",
  "key13": "2bBtbTkouzPdNAnuQ9vSASne3ZtoZhtzwBpFnjAESL12aVXA83y5WX1zyPN147WSEZK2ypV4py51vQoC2eyTRLPt",
  "key14": "3KaYuS24pWf8vgCGgm1x4b8Ecw2BdEFQtQuk7LRecK6iM1LR3DdyFb3x1bg2ZsE67x56jHfGwzQr8uAHQBPfecyq",
  "key15": "LZgS7XsVLbGfUYbFgD5rd3yDNnuVBSe1dDw9NDoj2GMPKpsFtog3qwHSGPTLweKR2wbxYc34k6kdwxjvDUwgAPH",
  "key16": "4MTvQdgHWTYLC56Jv8NfSogsmyH4VwcsuqhADu8xixYre3yvbkEKCQ7HqzUQ58fTdpPGEvcoSzWEimTKKZu21AqS",
  "key17": "WEmn1eKNsTHMranHs17c39q5d4n4mRFVnfmdCpKkj337Wdbmx3hHgST6vERuVwPwV9GXybWLp23S5oMvvPNGrEs",
  "key18": "575J66e1Gqvm7i7389LXMMWUyCK8nrmfJSoQzXzzw8A59A3i1WWxd95f7yi2Q1ShcJxvrKCnpVVcUNygy6WAvWjn",
  "key19": "5cbVZcedSCrrWvKetzTRcheJQrZM9bJAtmNKzMAVKvuRR2APD51D79Qr8SJKymovgqsG1EXs3ANwbYwBiEmTY5qV",
  "key20": "5BtuTJEviKBmbB1w8uJfr6Y2njGZU1DG8LAXr43f8L8hBu1pttoRiLoK2Auuw4eU89ocNiwD1hvqZJoppzY3py3J",
  "key21": "rh1VHtZw7fm44hXmxL4VbZ64FicFTu2jjeZsGM1KSYgUWJX7yva2Qjx5fZTRFzTyK7BZzjXip8Ps96JX9pVgHLR",
  "key22": "4pwUsoYziu4fjv27n6CmAya3L37STX1tgpuHSfssDTt8Xp954dCyxD4BdcpmWqqT3uBY18b5qNXv5kgNpp8AYk3D",
  "key23": "3bLCvvKL7XFdKnBRCrBiVXKJew5wAEdzcXVjq7gZ7PRtT6Nk61jbTFUUYLDCtDdGkBnYxfPrtLftWnRgs4wCPjKG",
  "key24": "5yz7ufgkP8zVQvusZckoiJYTFNCUT2FJzTFX6X6kH5A8RX3P51vU6ugpH1tADVqAnxk5zgNvsaAJsNS4XCmZ3aXq",
  "key25": "5XGRqeGgRKjzerHWwyZeL34jw6ovCYXKY6s3vDPYYrsTZbtokNkKjdr8hQebdZUkE3cijSbfwEdo4gaMU3VcHpDz",
  "key26": "5kknUChEjNH3ESAbmq9Kfvs2UCtzPShMCPk41ygQFNuRsmPeWHGN191vbhRU3pvJTRMHFnuD7vtjQ2wyNCsMMMfG",
  "key27": "4QKjAWP6j7mzncwe7UB2hLRj3tK4mfoEYRLX6NxKd2iUfE5zokFGJwXZG5kn64UtMY6ARBRs7keynBsRZ51g1ena",
  "key28": "5K4gTEvqSxdJi7TdoxA6WGVEYme3xd9fNF39r8fpFoXW2oKCaPCRLAr36ZCW4VGjqgaUExeSUuxkkcC3ohKxhRyB",
  "key29": "2wxBXF9M7xvNznbjJywZGf7a2GBqQkfQ991SDSah2tNs682tHqpAEbAjQU1UE5D1A1nhwLkiqKNKinbrYhRcYaEN",
  "key30": "2wkZo7uSBGrRhhdyR79xdc2uvNDztQKid8Kz96YbWMkn1wQ1piWqPRsidLVi9GacyGRkskYLbmLhzvdDjuwFGo2Q",
  "key31": "2cwbGArrsG3LXu2YsmoXb83LseTFki3i56WFL1itJLgwSgWzfoEgPMXEr9LDCoysZBqwJAh9US6TmRdbKcwN9E1F",
  "key32": "2ckzSFZ3okjjFfj4Y1rfLDo35C65z8rzTJ5U8VE6aXLD33muyoNG4pkrHnpDYeWbL3bqiPzEF9v7YzV8LmoDNS5c"
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
