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
    "2oz4zgrBdxvZXs3B3ENiKAWCYJky6w8ConnYuDAfni4DxoYgH96bM3KD1n9ZfeXGNn446Bcejg4SPUWu6B2PjqCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3jyr8LrqzWABUdaGGrA2ZtMJTswpAK1yx74nGFnKuRzMFrAhLFqwoLDgbxu49yRM5o91sGkRcXy2jzTBYb3n7U",
  "key1": "3hUoGaio3FatKK7B5ouKEGjYbRse3GRFV438G8hg9NAvo5bNWbdifTQ5ncSPMAiHCGpdamrv5dMqyEq1Jz4QxFTr",
  "key2": "g5U3PVck3pxoY8vZsQDAJEVtXtCFUkgytDFiNbUHJfbzoE56ocUXoGPc5gCmbVJwxxgkwXDYHdkbPCrQxYRaMsC",
  "key3": "596wPNcKyxx1oqEGozjmS7n7jgQJrjCsLu9n6AwtQDFook4XMsjzK3DAzrnYY4ms4WAPF73yhb7zDTzpPK4NRSXb",
  "key4": "41FwCG5p4cQDH4Rv3yLwuXuBd1Rdpc6tcfVfSBbpqT7edCs1LZKnJFpnPqzkkuXZezUQhHx23SiiCU5HupoA3ZzY",
  "key5": "2XTtjv8dVSMYhQTFFmEhEofVm6Htp43H71Rg6TixM2WKtFNGfLxdM12BnkKENMFVMzdXr5EAHMCcR8BDXFYr4BtS",
  "key6": "4ykNsnh37stcSof5145aP1b8WpJQQVp5xC5A6bwWzd1brnk6oRbYdLetcpEMkCWtgFNBnMo6b4AMGRZ4gD4Wdsmp",
  "key7": "2DZtmkYWFfTTyUPsZ2M7DPrWZGyWqe55zuRPZfj8zPaAH1gTadBDyygtcSVxKQWhQ2h1KZvZysQBeDNXQMmyCrRF",
  "key8": "3LDmnhaPkWy2Zq85EWcF2BeyGGVQaDkXYjG4MnApWxTsPA1N2WZvsNsKYciUnDP3HhFRWaCzub9sTfCtKE3dUnJ9",
  "key9": "5brBBpwFwwxGqFypmBkRKVMHp3Svi2W5FiEMJMZCamM66FpUkUSBSf4PW4k8Nqe8PadrAXbfSA3RgaDZwhekz6Ls",
  "key10": "4qh7T6ik2HDafd9TvuoFXknnjoni1yevrokcVTJVKDRPWrsoEka2EaMRyHKRZgws5Xv6px7NJhQRWPbpumUDHvyW",
  "key11": "WCwq7QyKn1ZVDZE2STfW5U5HBQ9kWi3P7NPcdYr16DXXKNmKemtBiG4k6C8knKjGbHMyVNnsAnXgq92Q6GqNLdg",
  "key12": "3KDX3TtNa4ZJgtd2dMthYj4aawZLgnfQjZ3KBDiHqAvf12o5iX7KR1SydDeGS4otuf9gmyGrXTPZcfrdnp49GRdZ",
  "key13": "33o4pzWV7ykfNKp94qRoYsmP1UK2nxU2JWyuu2sTEn3ocR9gwxSHP5wuHVTfuKZ1Uq1DBqHixTd3kr6fQ2uEFVmz",
  "key14": "pAvRyB3bLMAWovADui4JB8QunWQxQfnGBXunKhwaVmh1KVKe2cUW6CQ6KE9EAUwNRW5wY2GvMLfk23DdNJSCm65",
  "key15": "3PwiA1ABpo5uYjLXeSyjqcHzmKPLrKcDPKeWRjZWLKqyzo2juQKn6h3WuS4XJdeXpTCUFRuJLNa4VbF1qGhQgScz",
  "key16": "S1xaogLRuY7Rz29MruB3dgMexnmM9NKquUmMwFcQ7boh1Fqufb33cxKYwkVDVTDyWJ7qSmgGs244pxeTWtPMi4h",
  "key17": "3HjfKyubktFdXxK7CQay4VKVJdwYSBYDvMB6nYwJYW8YGekyXPj7BgrpKz4ot6PwXCo9S43eV4dcQNHHFc2yRGgB",
  "key18": "5curWpiE4wP6mvsdgZG6cT6QzsxmwhSxVp5KmzdLPtJriMoXnQzpBvy81pHYiKdmvqKux2ya1EnRBxVKvvEV8onv",
  "key19": "2RYczEErTsV6cLhjZeVth21yPsDESjxvUijsm2jk9cX5fZdjM7S9oWxk6XDXo4obU6bCUAtpgqa8Xhdw5PCu4n3z",
  "key20": "3ork5Bd2atEpV13mQ4XuCVbEPXMi8LoRsVkU1QWi526DiJND299ojDfgXXHdZGvTzS6wE3ErcZNrVpLKoPUM3NeV",
  "key21": "2K93Gi6zFSctWo61JfqoyzAFygeWYPjPL2fhviTb2NpjaXmJ127RbxXbkVUFmsq6oR1ztmsY9EkvNNVdPdAJvgFu",
  "key22": "pd6ufPg2QrZrd1T3XDyTk4Vy4hCbMKKiprZX2T1VPn69cTZ1nFYJ5HM1ruqCXmZnZWN48if73HprtXg9MWH6pBY",
  "key23": "rdjBkBjKEfqLa2yY39gQbqqbTRAvoxb7rX8FPAmpuoax3L9tu4Ybj6kRBDyph9WFZr1Km8cmxdiGdqLHAeriJHp",
  "key24": "2vZrY96AJ7L98pEf7oCXseDcD7PPLNrrQNx8NHYmjDTLLipCemMDJHTCrq1K4WcF9PCSYnMxzos5DneMEiXMzxJ6",
  "key25": "2m6KwKKWsFHtHM7eV6yVzKDstJiFAVEAuHzB4Uw9chcdt8Bp1R71bHChPtUmzs3BudKu1wLxoGn75G39tnNdHe4J"
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
