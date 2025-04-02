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
    "3SwY9a1Bick8jAJ5ZJxx5VN1sBcYuE5W66Tu8hH7tkmKRbw6FPHCRfwiC2iVqdZh2Z3aFedpZwC78LgPb9pWHuM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fuzM1wUxiN5rT7rWKchMjt85GNEPfTSCciwkegNRFT9FFkxwLMPpbBCDj4ZMEVfGrYaQASWFdx5JbmnNDESfYxb",
  "key1": "612X5FqdTuzFcXTfJxeHphhqxhmU59spr9HCoBqv2MbEyrLWRnDy2mFDNbcTDT6h9zKgy9CRF41RH6cqRJ8oM4j1",
  "key2": "5fuPcrqd6Pq6iPcoc6fMGC3zPrKJLnnp1oGQGJr9RnjNUVvku3Y6rj1CSH9y8pbXZgHsLVpaxAoXxx4wyFRrCf7X",
  "key3": "3AeQoSgorgXdGQRQnqxoHHbdyjd4TeHRsWVQkHVjKzBu77tmLfZQ9Fzj3tDg8GERdikLByAt5wa4qi5zRkvRdZKi",
  "key4": "4otgSK4yGwgQicNVaG9kPWWmWGg5VDqPWhnSretPFgPMjwo4MzCzpR2VKffneEjActLxdZShzwBFbt1e1xRw1xQJ",
  "key5": "3efh3bREETsV8PofCY7ViN2QfVqF7aV7r7go4Qk5v4zWbR1MkqUcRH5ZgrreRcvi6DDMwatn9eJwSmuNuJ4vuNxd",
  "key6": "gh9KLXtP1McHaVCqghNztFnicT1v9d2t1LgDiHGcWVbznnuqEup11paFP9BySzZCMkbMyxrngg988raUZQTuLYz",
  "key7": "ZXCVEChsNBo1Y9p5ooQ9vNC5ZZz7RrfsfWertcMaQtC3Kv8iLkK7PuiLjE1Lz7KmfPDK6Sv18BXCeUounQE4NVJ",
  "key8": "4db4u46CdrwN6M75kGAFu6Dj665bQuReGs8KPgYBaV9QvD1tmTGLNDWs2xB6tJC8snvxh6p4NVjU3SfD7PUdgKnq",
  "key9": "4Ne7svVS4JHk3JbUsQMzCagDFo2x86qPMd2WDYjMhrZqfvys9F6PPT7abnnE77jDRfWFLpawe38RDv5eLhwjrq9t",
  "key10": "5nYDKpc6wZyWEz7wEsMS289UtbD8Jx4GjLNx7no6D8dhsLqvSfcpGjbVzFTME4RVbuRamH2bSoMbCsgFL8vUZ1xc",
  "key11": "37Zk5qndCHexHyD5VdqJsxrJzkStbBrTKyW6i9E8Bwre5mdrbBZMtYt9CszUiVqEBtDp2H4AESNL6sKUBSAxKYC",
  "key12": "J7MCkZuW4T2Y6cT5sVBVpDvEpo2gkz5s8KaU8V9hKk1CktoGgLV3vHgVRdDtkJQ1QydhaR15Sh1Yty5EcWNi8dH",
  "key13": "2KmLtEcZ3wQ6ckVpuorp6tDzse9d5mHajwbevyE5BTCnwzWJDvJUSX1NEtN7y7CPgtSYSXRa5JKTTyRZcaERG46J",
  "key14": "5gWDMhKxM1Tjcpt2UAm48L34D4KQgNKju5BECGsetyiFxyu1fFKskrqVsNqtYfxCVmDdFGco9Zs9u2RkvCE3UALX",
  "key15": "jx9B1hckiYK4fSoS8CA9VRNnfGPihu8dKUFswMuoQehf2ESQrihqvFVPYEN4K85BYATQh5rETK1C49ytzEe9YUr",
  "key16": "28mwoQni9hrJQb4YDthoP6XP6AoSfapryzoKDEkB5uhA18KQGmtUC2heKc7xaT3h2A7UAm97QVFxCkgmDu9guLbQ",
  "key17": "4eUoeaGcQ8Fp6ggY6xxBwGch87DdXRGxmgpkx26r1o7wyzXEqh94rYKkqLEi8EGQbw6f4j3oHoLCrVDNWaZdpXJW",
  "key18": "3T6TCChjkogr2jC4wRaLxXa2j5h3toqVjQF482XvzMSgc2iu2VbouHuLnZ7HZufYfo3sqWirFZLmx7KCP2RS8D9q",
  "key19": "3UXJzvBFEQdiyVR4ZhhJdJx7S7o6WTxLUQJ5adu2jjYnC5APdpszjQuB1wSxnyxGPhPPBT9kmX9Q115psVuhkUhx",
  "key20": "vTmZdKF2tPqXwER7GtjaEJyTqQwXDvTwG8wyhEbW9DyEzMREDkP8oZAkAoXSmPv46ejceNZ9sAZE1XoW15CJ99m",
  "key21": "3f62BzNQoFo5LCQPwPX371buen4qw7WoVhapJ9QwwFXVkS5tDVkgD4S4WbasJ41YjanJbhtHaGsZ6iBEgtsMpYyn",
  "key22": "54aMCpocwsVVqiEMbzzHgEsrtBBAjGxFnRVgJ56aA4qyhZaxpxbvdXwyFURdS6UtsZ7npV6omsWtzchumABmaUuC",
  "key23": "4JjeMSqD187LZsftMNXo74JPSNVRQaHmryTnqcpoLBXUJWB8iCgtz1PJaXCRC8xC2PRtunrN327H8ZHTHiYqmxVY",
  "key24": "2tDdBq37Puq9pgrzzjgbWLk6H6eSoRUyeYr374xRmpS1JdpxDxByTvYCfdTKucBvxAi2C6WeCeZs6Fib4a6V9DB9",
  "key25": "5ZFyGQvJ6BDkASqFdaqXXixk9pT7rkWNK1swnH3VHfMRGhc5jNKujzQFdmQABNdn6kYZh7Y2EUmxZwAH7cY5jw68"
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
