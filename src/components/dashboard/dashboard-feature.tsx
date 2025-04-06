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
    "4qKCENybwPTKqEtQDMrcVzYCwWi7SUVDhcvAqutQLoXrfZo1CM8Q6Kpc9U4p8SpPZuGn5KNWEKSjEzDiWfJoa2qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Uqa4nWdCpxVq4go2Tcspy3Avha4rL6G2XqTzW8tirE76zfxMLiWiWXEuC9sQoQFyFkMXdeRfPW3Sudpv1GqY8N",
  "key1": "Mqs5C5FfMUMT5jJ8zZsGxecQP2pbjb1QaHrHKv3JKE4nV5Fiy6nhU8sgaUnjYF6drbN6zY6VKkVCCqKUDCqUgTo",
  "key2": "54WaP1QasiCDa3p96ftpcnMUjNfBE85iabMia1D5qUvenNdo24vbdY1Y9ppVyz2qBkQqF9pe4Ygtra3UNGjFHJ3A",
  "key3": "2fhwYwZedu3z8wHgsbwh1EGM3SfXDxsmXCzHdqZ13aqF5NgmDFmmU2uhyjvaLTnPaheraWYWbQATuwe9HCVkoUwQ",
  "key4": "2Dybpu1eK9QcUuspb6YvDfoTSX3KFz1dc4Tvkxxe3oZbBimNpkTucAkFqtYutUaRwVfdTF9aYJAwCt6zcSNA2v4a",
  "key5": "3TiMhYkcjQ35nAuSJJvbCPScirpeYccmxkCq7m1LmyaRNcCZRhkNTRQP4MuJUn2F5r48LWqP2iRntnejaxpEXmLu",
  "key6": "Xk9SdbsLzDkFfUFHHVd3vvEJMB9huGfg975kanotKpLq8VWAsAzg4cWunKDqiBj5AwCmzbd7xKDzVihb84ienDN",
  "key7": "5w7eZm2BMqezFjXgtAuhqCCSa8aTwEbRxNLbgbQbZ8tryosZJ4P5DLhoX8o5p1kUFNn45C6TCnQUQhBCfzFJ9VTc",
  "key8": "5nL48ucGsxiAvPP2CDq4tbZfb51eUJvaV5S1SbpWjU5xm77Gkk5RGCBc9xf8wh7u5AX1rdVKiNHq7vT3Keavmgru",
  "key9": "5LtCpum7ZXGdr949v4YADHRT7Gtd4HM47rvoNvVntJaacEzz42r4G8PfhxQ15ZraWgGbwTx6King6bdiz4d6xAFk",
  "key10": "tZjwS754bdMVM5aCMDMAC667a3CR4EJDWnMHujTK8aFzbjJidaQHD5Ci3EGHFJykoAjnSJtq7mdHWCSD1M3DkjU",
  "key11": "2LVoDHLH2pg4BVzerS5obcctQgUpbduLLGVjYYeChsnUqsSEWR2DK1dEAoJ7qZkzQBjRDko3YcL3T7ic9APb9yzQ",
  "key12": "2zmTe9W7GZ1pm6zfNZJWvU5jEw82NM9LgHXSKgwuLMXJUnuDoTzJCdnsZK7quUkVTCnZ2FXphN7pRMcwYe5AP5iR",
  "key13": "61UADbVd7HfYNxx1Q17pxgLocKsbeNUpNYeb4hR5Zuv57RZX2CcDr4yn1yhxjTnUSwSzZkkSVMxVZu1i2hx2PXDs",
  "key14": "48hiTECqxV6ts6qrwLFP4PnvHfhN66C5jrBMaLiEk2A8BpKPVJ23BayrMmCsxwS5QcXPuHkXbBDxv5nMSfYXS9qU",
  "key15": "X23dkA9ctoC7WbgNZ5dU1zYx3Twj2j6JDbyNt66HcMRJtgstRy4UgFMLPBLatrLxiXcwhm7rFgqRQge48Hq5qQ7",
  "key16": "3wgvf68DeZhpj8Z7zKzVoGRQqEF11KBDTwCPxHivBqMUyjp379t2aZLdEyEzWtvwvTHGm4xxgnLDTu7FaVNoPk5v",
  "key17": "5zeQkzEM9LFdEP3FUUf5gKR2tCH6ESDcRvD3SN4ZhJ4nXE7CrxdEBMbg3ZJP98geuNu8orEXxkqrZuaTnLfK3nKC",
  "key18": "g3ouJxjvMrNBdZPanbViwdULNeCiqdnN7GCnG2j14nDh4WUj5McjoSYSzTLd8UgGx4J67gu753RPruZHt2tis5s",
  "key19": "ndvB5HSYHrswXxgjLpCLLZP2vvNW8ZJ4CsprEqGiLtPE1GGJhbvztK1d8HxM4cTXb96xTBx386cgcKS8HZWwJLD",
  "key20": "2WZwVMbKiHW1HPCbpe535LTjAmRrTpwHbCthnXtwBAKSujoUXdQBrvaJ4RvwPWRNimTL81BU6QA185BiFihBbWub",
  "key21": "5dbrjZ85NPmqqTTgG6rWcaKZueHxETGjhnJMhGTtxLFWNbUGnHuVRU39J86R65wjeqeJQqTVGdei43BwAow6C5Nc",
  "key22": "4WTvCQ9C3EkaanTpJZcFaum4vfBRzQvcbnQAdpD8cpLZmyB5t7Whf15kiKfd9775jDu2tqtF2vBSE8F6N6ZwY3Ce",
  "key23": "5M27zEZD41DeMA9mC6WrhFYCnoXxayVqDX4vw9EQ6FwfqurW2FrpKMYLwAKbgaXWRNmKnmtwGJ72wMu7YoeAST8c",
  "key24": "E2GrZ1K82BgcmUhcxe3sGjF5zEdBFS2pKVtvJZQzL73FtqTxsjdzNu4wHrAnqZHXL3gZ7zXi9b8Gz2QCVNC2kTv",
  "key25": "4LCZs3s9RegEgoJ772AtSo9cvhqpsajVuFmJwBzHja9gPgSpiDZZ2YWS4pYxmQLvF81muJgcvw3JMTtKR1bvWB8x",
  "key26": "2eWDfEPexxkPLB2tZvVN36TsdwgiBPphG7A5yoc3NFr2koPm9Gd4d2K65f6gtpmPp5J5oZF6BynYZ2vsPPYHXTRk",
  "key27": "4tExHrQTzPCvBqdUkXa1W3uNcBr5sQ598n2ZMvFEJLTcvxdbGtXv9zTLjVgzgvMEsbwrJku1oKCijJDCzxfokR5N",
  "key28": "4gLKjqHCJ4cngPtiRibRSoRiHffJaoET1Lp8iCvzbfd6Ddb7nYp97cQsLgTKeQFaC187SSJgZfooCAyVMA3B9qYt",
  "key29": "3E9WgaqVwF3CetG2EVwqi67fYjfSSxWbaHYJWjDyfhnL8j37z849dAZPv7TDFaHE2KYoSjyjTBJwWArWY9uJ2ajK",
  "key30": "4wP7QcU4D3G2SDkHurrCNn4zwpfGRhd7A81vMmpNKtBDAzGkoX2DQa1jSZLGUNQu6ucAToNdgfW9tgjJ8HPmpAkG",
  "key31": "2gmtJgy15v5Kygeniy72FnzXkUHo4Kmozhk5BoU4MVhCDGL54BbN8HRQMJiXTouQQyDzbd47Fe5R3GmSJx942qJH",
  "key32": "4wCMvoQJw9a5UWUiTJbvBgvfS3WDuScR3BfARKk9doBg4znHje7uchwTg6AotVGvqcN4cYVmhJNkSc5g9Z7oTfLS",
  "key33": "3pV3iAq754HPveYpDeYqxnfijyM9Y47bDiuVjKwahKBppKY9CVbTdngGrBt3P1gWR6tCzHdTDxcv7FQewRE25sBy",
  "key34": "2XJUWVfZFYNGosSq1yjT7HFWmu3jhjndWvVb47tAgYn6TmSEYBF9hvB6CsFBvMycqEsQaoVr75rdgER3aK5iXU1w",
  "key35": "3k1AD3PNq3Yfyw8k1YTKxk38Zopicg9vkxcPnYRALMAoLTCXqaoejPvFnHot1wz2HLSkuERJw5FVTAEPZajGq7jX",
  "key36": "wXjETW3KJpqnvWA6qc7ZwZKAe2SpGu8s5hSKMzAXSU2XNUwop8mSNBWLbopfMEfAeRbyxQF8tCq6BVnWQuZYKc1",
  "key37": "3MZNMGoRomuSGQt3GgzjDCCJZLwNmL3X6pL7bShKo2VG93hBgtpUPiyKPURERyHLRBqwRcC3RMKFA4QGrdszxGEs",
  "key38": "2hdMWBiPdMreHvEAergjz5yZpfoZdSrxBNGMa2HhfiiaweSYJ2Mh9d1vTdpaZyatVFaWXmqSd9iY2hEoJGye86JC",
  "key39": "46gseSDiFSZDWe2MYtf9zpn2sZavanvVef4b542yuNw9PkKmNLEhu3bZo6Rcrn4b42sPXaVMWLvmCYsjiT89a5zk",
  "key40": "4q4xV1LrK7qa26zkHs3RLVmMJ7LDBgK5EdkUtfcLbgMJmkfM6428E6TCCa4AoCfzW1m2eDvwdRWpjcK3x9Z8Zrop",
  "key41": "3CppxdFVnbU5Eidc2JRhQELb1Y3DBLmtH18KyuSnxiE6LgV1x3UXrdGHSBXweJnULu2LB5EVE2B1poGfdTUteiGp"
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
