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
    "5ENqBdTt56s52vH2oiLuzwiYaSQRpzVvTFSHqGp9BNPPvbiwQNqeZwhnpCobp9gcSh6QnXTgSFkV3E7pAF8fCjvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2381GegwbEgsCsyPRbLh4bC7C5ivAuFHhGyyetbaDpabpssf3pnjSVYs7fCJzsD9iWD9J7JnqZnCRD2Cam4Eejg1",
  "key1": "XeNDTwpT1wcCgBpNdmArMww1ayvsuUip1VihXUrNkG7UbC5F7YKyrifEH1xjPtFCceyTd4G7HK4HNkEqwtHVNMh",
  "key2": "5TgivCA82vVm4CzSAdTCcoPqVjox2MSHX1ALDCqSavDgjCiK4fkF9nPycTj6ZrFHFjtQoHjU3k3fwz6VRqX5nHaE",
  "key3": "2gHfXL1TrvB9DTS2XYTV4nN3MF7Yi1X1rAv8AVKsKnamgWEu8mBr8sbpsdPEuWeiVAHdqto6zDvEsk6ZQxBVKKGn",
  "key4": "41M4aVAQrBJgVwTQLVicbxDp39V1J7r4ufo2xCG9bHHTA3M5o7rV5RzSMCj7QwfduiXQ4opA4pCo2XKspv6aP76j",
  "key5": "53VskMa3CHnMeKKyEhKkrD1KuBwdTPeg2Np6oVHCQdUvnB5GbMimi5D5fNPYFqYMSWLEoTNLXWGZWJVnEZ994Exs",
  "key6": "2icBHo8cCkL4wNeRD9nnZ4hdD7DF2UdqCjDRTy7pVwmzKTmp5zXBxzzzZARMfyXaJxK7uWwUDVeWH8oW8RqYMfP3",
  "key7": "3WcgPBgw14f8sxYVX2jCXNVtJj8BfWcCQjkysXC2GGb7BQ2LMeQowULnNU9ahkZaQFfSzrVvhNNih63xtxkuKKYZ",
  "key8": "Vx5PmZs3V6DzBn22oMAe4Uf9BcGxgtgDZowMhwQAZgxMz7azBMHtf2mkrxB6R9Cn3vfk1KL17vRA2pUwZVtd5a2",
  "key9": "6732auUGXYnLpHKvpdUBVswjxDgGvkRA9GMj4SAUVmgfs8vdw52iMunBniWPJtUAQhCASpPc6FVXAdrmq2Gw4TEA",
  "key10": "3J32mppnVZDNqHFf17oD7KXGETWQA9EciVxDTdj64VBmQWPd5Cb8abcUtnyHtCjw6LoBAtqPjMP6ZMkKzXRffKSN",
  "key11": "qAZn2fWe7hcaJ9bjhcKq2rtrQMccfz5BKF5nXbYPoKJN6mygU76TfSRVWSb9E1NBBSNzxFC1XwkHerKPwrQcVAa",
  "key12": "2vg82dCahguEpB1wfVhDK9ApuTxLDz244DhzoGKL8GT36iHLsLbuqG4W72bo1DJBwx9QAnRYUTfWzxykD4VvFV3X",
  "key13": "AGn2wmwCpySpw5ai2ZDSFP2zybYs8iJvVAc1QqsEebSfTUkL5cP9Be8jEoJhkQfoF9u2ShS1syzdkba3kiNyhiC",
  "key14": "4bDdWqpkBGac9c7iVwDoNRx6yr73PbxmcZcBYYPcjG3NQKWebHnnDnC4zUrNV8wUYmCLqz3WXZEYCqAViyY8LkRF",
  "key15": "YygEf9RhGH7GsQyBMD1ctPC4M4Fc2v4p1MHB7441Ef6rR742SNGSG94NY5RcX5PqfV4jMVef2Sknf2CPQtbaJHg",
  "key16": "KZSmjk63D77zUHpjMmXoPfUj8XzAbJ8Rj3nm5FhL939JQZcWeBp8GErFQN49hw6Cq8wkhhX2kFCiiH8RhC9ognP",
  "key17": "42abQtWQUVGfSU8PYH1Uz5LYSF8ptTftUySRtZWDkWgstvpRtien5SwD8LZ6ZDb1vLM1N3r1fnExpYEkwo58CmHp",
  "key18": "4FEBc5MLxwB8oeUQwiC7VZ2VoBTGqqXZJqusGCueipgKaTDHVa7zcEUU4EBvAcWCXhwxUeECrUsuszDBvE4uNgDr",
  "key19": "4SJjz6pHxKx5TfvMJtmr3Lcp5yjCbM6f6Tw9jECSoKKpForiwNsqscqWj78GY1CgFbYATiJphZnLPE4mVgpfSokv",
  "key20": "5FyfjNR7jMnniYYXW5v7gNv4vvjDFiYGu1aa3RVHYdcg1CGv33rdKk3hMUAY6WXz9FSv3R5syv7sohx4RS11wXWb",
  "key21": "2iLfo1pxbEtV3iNe2u69ET96uUVcvhEbBSmCi56k8xyeedmt4zZhE2ZhCQfm4Hb64vDJpvQfTrPPVRUbBUZxHYxu",
  "key22": "53yHHw8VArM4Qh85uU2csVMKpadttB4YeyavcPvdqbud3zK4bZhtc5gtfDRKgXpP4ZNuzoRsB8V8St86SwWCN81",
  "key23": "5W19Y9U1ruAdACTQMFHiCBxAzoD6CVk2UAiBLrvRYb6ryFyjJNTT5wEw5VtDdcYJKudP881PwL8GgYB4EddEYBbR",
  "key24": "3psdENLhuCoTPPzk1WeUERPGusERYeLD5ZqQ9a48NcJ2XksRSX3DAmtj5YjSjD1U5fEv3GTLKkDUYvNMuxYNpyNS",
  "key25": "2ry6dPfuMGBPHn2jqzMW7VmDCjqvgWjNKfoGgFGENr8Gdup7jadTgpTs6jrxBTJPFPeuDzVtWeS3dEjwGBuKoMwx",
  "key26": "2e22swc4hK1TUPbo4dJjbyABySmJyA4HQKNJ1upB2mAxvFLVGfbVRp4VJJPpq5HfP9WPDQiBJ4WWZjoKc8T4peRc",
  "key27": "YGfCQbTJVFAy4WqhLGWToour2FKqtburgG8m2NFj1v5hGzsekCxTkxYRBbvFUo3wLKShCxUd1b2cicRzW7cWbVa",
  "key28": "4fjMsj4rJ4hBUp9wriU5wyZ3LqyBjt8vnAq9aCQcz4Rg7pDkBpNHNh1bo4Sui94Zmndc3L1DL1sDPdK99FWpnEEz",
  "key29": "5HyW1ssootcarmqT6dBimj7Kh1cCBLB2Z76VMUBQKJaRrg9XyLntVPDFckbgenhKzeEFqT1cUv7dxPttyM3Ytxvh",
  "key30": "3Hjguuwio3Kaio4sPuz64cu54upVP5yGCt3FE8PP3Pmr1HdkvvRQnzwzrncz7FEqTQeFJjeTyXp4sJm1jKf5yxp8",
  "key31": "3kAxaXrZhTKbCx6WFrbNjXRiyhnqoz4QoSoUUfVZUu63msnQymV5zTR9XzF8z3Rms5hNrC5tagMDAYU5CQJv2oq4",
  "key32": "3L8ZTLZf5wrhBAs38aQBkmgpWex7DKWo4H8pP75hT56AMYdXaVFZ2DVWHQTnBtBcUSGq5w9tAAJACdZRYLmndHEQ",
  "key33": "rAcbpF2g8N1aU7REemyTPEZrEQ4mbZoCfkdSvX7tNvvoZiE4djaGFTePz6WBhmaUtJGfPL4pBNFYtHXumGKzXxY",
  "key34": "4CRHMNHJNf4R4ARE9GyDCBeqdDP4WKrGBPznmY3eXQM1K8xE6QxdNMbF6DvczVt1Lp76Td7fw855QjF18gfJrhZD",
  "key35": "3ngz3zEdEVQAiLZfwLUQMogWzz7PxY7Nmqo73mHW2CUqfs3Zwm2AZxhRWHKMLyZUxmCkS1qekCCVk1f1CV2u4mDk",
  "key36": "2kwnvY9d19neHeMi3TANjad9L8hsMC9xsJV2wSrThMgB2BYAjP81ip7DFBhz4eHx69P1mEodWC49EenzPvUeoexL"
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
