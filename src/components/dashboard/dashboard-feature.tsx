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
    "4ZzSJJjTzPN7DDNsycZkYNibfPSqFzJxcQoQzkmQfPkoqFbxkCPYt6b6Xst1VcJht3TbKwESucC3ncizSdMnxstK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHWptmxeJfsahVpLiB8YpHhCiZLiSiEt5jGQ2XhgVow5fEz4h9fvwC57qELnb3uUV9Wme7wYf3bErvNTifLSf9E",
  "key1": "5HMFyTYrXsfLvb1W6hYYaS9VQdXKvB1qR4oJLTcuw7e6gVX3qRFvLNC2oBxixcdQrmyv5rfQkM2iHV4Az5uuaSKC",
  "key2": "3b5Bxa2Un1M9tkffmw7VJfpVXZe3YZxCDSRdp4VrZxur2oe3DD7ydpRhHndPhkigTKbGiyE684Yq4uzUayszX9LP",
  "key3": "59FBKfgP2ZYxSHdffrR3zaeHBQy6K6wa5mYcq6eNMfBY8k7KE64Ck3c7TKwWbgrfdwdCRcDXoztLEX4aA6tWwF3U",
  "key4": "3kXa7FihLJT47KarhoBRUTVeAPLQEfJuFpNhWsoiPcwHLtB7Xz1RR2JLcSRFZjWvQAetnjAaG9vffoFvGNu46oNs",
  "key5": "Ms9A5LSfjjGZc6akkiBpGVMi2MHchtgNcFZLY5KcrTQbRaipX97C6dt5Ms9neY65wcKbAx8MqaTVqeGRtxJVx37",
  "key6": "4Wmjqnu1nezTNBrFb2ok4gnynH9TWUZsz1hUqgbimcZ8et1Uk2VneRx5ARVSGmDne2xGgKArGqrLJTxhhdkHZq1v",
  "key7": "3D5J2hxhdnibd7hjjB1SURwaiHD2TpFSJp12EnDYt8i7RtVDKcUm97LvdphFxwXcvZQLErjM9nxp5HKce3sjjums",
  "key8": "5L5LWaoiXvJYd4WpqPdKXztSvVNVxXKA3DUHDVvMmWrTQbfRJpCyA1dUZw7MBEKXzx1ZvFYgnw3G9ohhBbouHEwM",
  "key9": "3vDRWxn6qA5JQeQwmV2LuRJeV2AsqUx87BChfGxBeKJbLJoR2d8wBaEMy3dGXmjKQEg18fgthn1H8ZQHQxevcqpU",
  "key10": "3cN6h44py4QGRxpBqB7rRoHBU2HQFkNhLHinq3ixfaBXZf3jTv7HfZqKQYBrb41kiUtSibVj8VHXXfYNLo9H3ywc",
  "key11": "42J8SP7rgH2GKkLVPKFbgQAxdoJzvYbnSDGWXUVo62hendpBXxHWDr6pNvePHhecqaNYxz525nyySmd2ibqhEcEm",
  "key12": "TipyJbR8h5PGRNsknPRADdfugiyh5yek61DoJpqf5dxb7fi9AUG5497quxCcY9ui5zR8yY6Fr38Uevm9AQvJJWZ",
  "key13": "5WAx12qd2DU8MWSM9mZq1Y1oYtchGA6h2fM9YRGkU9QzgLTPWzvF1GvzXdFeopotV1Ei5Csrtme3kktgeVxoayX3",
  "key14": "3511Rw5ENm1ZKY31EmyKCuQXMg59TUGqqgT1UCZ7xbyeBD3EqfFtR16CdnhLPmWnHidPqEk712YFhURZF6v6Maiv",
  "key15": "58qiE2PiccEoWyHzkjfa1PfDH5TjZMoKpnAUTFbR3RfuZZDkU2fFNgAxLT4bFKTFzgUjKbG9kvYUFkA3uJZDWxgt",
  "key16": "556h17rTPsU87aSMDxCVYbZ2P3Gq5ZVa7jGHLnipqtJi7HeQq8aXpxZCgnaz6cUs1ZxnKrpBxVv3Q7XttKMYoEym",
  "key17": "231zE2vccE4YgXTXgR8ogn25SFQkKG3WtHZYsqaSCLxWpL3B5dqhGUCj5WYqw7R5qAr2A6bbdqj1urKFmGDkeH17",
  "key18": "2WS78xCKm585Q4YWp5YfhJphXLtw237Pb5tL7pyP8sRYkVosovBBjQWfCTMFLX6u4Vfe8eZrsy2VFyXBGo26PjUV",
  "key19": "3su3dLU3UohThRpHvVLMRtoto1oHdr6BxiZT1f91igjQDaJLk8MSUmEDTdkiPXsNoSkxuvK7rcWQ4bspCWhc6f65",
  "key20": "3yzZ3xmHeQjwq2uP9QtyQdgsZoU9YdPfXCPetG7wG51jBVY5Kw9NVhSBDT4qRELHtzvf8vjiYgpSnoieB5TTRRo7",
  "key21": "2sSrrncoKVzmeamRuFCqSn3DeXXLFvWTXngURdr3YUzcukS7RoRQLn2StXAYA6EkEGoRkWPPe9Brn5oqj477jt3D",
  "key22": "2pcv3nE5t86W4SPkrPhguUqajk8Czx5xHhN1kVUVjB8XmxVeXscETLf7BZfRb5gz7QfnUigZ2nCY2vHUZoG5RZUA",
  "key23": "q76UzTKCKd5rJ978SxxkFLhFRcACj3gLi1TEKx2q7JGjEoPE2rHTDj82sxy8ZoXCgyDaomez8UUW9hYqicKM32s",
  "key24": "5bJmZdDFXeafmkND8tyNEBn5BXmzjii7NVuSMvKXPafScq39tfWm2fvDyuCRvUTNcBn3dT1iDkZFnxuh4uoaViFT",
  "key25": "5WAFaMQSQ4ZHKJEZbnmEH2MwmUDiJfj7gRRrAPJR2fYJDCHcpBchUXRtMCgHidEY58DNS2aogi2LRjcMVMQyfLV5",
  "key26": "5VLWhwcxMeLthWEzS7gWhGQoRqJgUtHMdDrXikyYFfyHpnDS6t9WkgUAQTeETbaPogWCqgc7R3mB41xSo93XWMwr",
  "key27": "eSCHMHJfpt2ktGYdfT4GXfSNVt5RYPjnzUS8GPE6rw6W7N5gRh61Hg4BM3M7iexKVrDHYeTfkTUR9Emi5vUs2uq",
  "key28": "4eenWbXBB1sZd2CL4obfjvnx9DW4KbaoD7RSqz1uynCNVusgJrRopc68tVhz2aXAiuMykSAh2FLNxo9j9yi43dwJ",
  "key29": "5n7w1kKfPpvErZSzWk3y86fPrHazadsfyQ7MTLfQQycWJFdwMdaZToZ6sDJD133xeN8KgTQYXVxW76aBUdzkVCNv"
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
