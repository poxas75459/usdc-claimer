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
    "4fJWtVcKWkTJNT3oK8FczSf2iKb8LFqUBDdiBXTxj9di2wSrkombeaKgy2xkGwFBiKxNrry3PqrUGFfmpTAfUqKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPN4vxFNXsd9sucL1W1ftukMrzRakD2NRSFLTRvL4tLNyuwNui7TtPgLx3EnjzFvt8psqoJAR8hWcHWGJm4Qtt4",
  "key1": "4z9ZC3g5p2Um2HJomTTEKU5abRWygz48Dssfity5KdyZcbyw4WMCpaeL85LreBsmQzzARi9zopzWrgcQwAWWGvhp",
  "key2": "3unxnnaWKD4A9qTWAA1aRH3THNf3J8D7VFHL7RHJVULCb3Kf7Phv1pfVNtUnyHhBQoxkNPzdLoKQXZGqkqY8uCsV",
  "key3": "3E8TKBTGeLu3PFwFxZYUWkYGoHf57HDshuMZgRdH8xW2CJhizqvjfT5jFck2weJMaW9cycB5TD54GAexkeQPBJMX",
  "key4": "3kHsna4SWR69aCu9TYsULjgBdi2onuYGC2qV6YL4gFVLeFWKPHZw5N9a5zvNiYnnoqMJtdajenBczLdpnsYMvfZ6",
  "key5": "4gUDw2QmCSkxZA2DpsmNwrpiC28pWv86dS4wqMtCt65WbiTyf1avPtkzQ4s4o76niEMeeCmLr4qfLjv9MyfEgT2o",
  "key6": "Y5XrpRquuuqQeTV9wxrmEibxWuFFaNpoJ6szrMcaeZAz65Dzk7bav7kwyxTtJUqStoWvzSK3xfFw95jHH2xdVFP",
  "key7": "3mMHYJ1HutUmuEcmL16NRHtxHCBfB4GiAYdTMZ64WjbHE2dyeKb721BiaufPHZZs7x6h4r5U4PmgdrDfKMKo6fgL",
  "key8": "339SQqJEJXnKAo51T1aJ8FRBM5WgLgWVcpCkXa2mBjrtPkQmz4QgS8Mu8Yaf8eDdSjNkzkQxGCKbsBnvFhTsJ31L",
  "key9": "2gPMmiexazsMDibkta2UHW6HTQRPJUuiQ8XPe1hYVCRWD3Ka2Bac575MPUmmpDxghACvyhq7k3EaAMzMdJQBW7BP",
  "key10": "3mEPhvSd9MxuxMUdR7FCrEp3usEANEwBYJ7CcirpafYDTEFnyNWmAYLB3PVjnDpsbW1TuCJAgxZVwdLD8hFjoJrQ",
  "key11": "d2omAVgyQCuV5Yvq6qybv8GEk5n1L6NsvwM4ged5EmjF3MvKZhSCsMG2ghrN2sdMVx7MnQyhahrLYWgRtYpjzKW",
  "key12": "5RTwtQ1M4yVNpfXwHFi6y1XeNKbKV7PqKWnFY3dxYhpvGn6Rr3vAma9aJpwQabVJsGc3xN1ZCMVwuDk3EuWmPU6K",
  "key13": "nBWTLrUKZFXN5PBiK5SiTaL9ad1i79TUYqhS5bbP1uPi5qSg61KK1ifWBjhZkXBhHj3rXQ7LxgfRuLzy2HVQgt2",
  "key14": "3B6HqDLtvx1csaTPKACBbFdamDh1YLXGmpX8wjH1TYMJbaPRJBeL2rXf5ydSNL9QV95wJv7pucLsTf4h44X9yEPP",
  "key15": "3uVcsdwPuo91FkeqbHLP6maXaJgoEYTJnQZayyCntMUwoSjSn3aHxqG1oS9sAizr5AfSSbtfEeHr98KpJhQUZPSR",
  "key16": "4tGkxGDpzM1YsKz9ZY38jT2K8Hea25ZkyygrgjWJMjmMTQWkxkbPAXYxUQxw8MkVhrKSU145dMcx3iT7RMuPcvby",
  "key17": "4EtHSnENFrZcrsy7KGcMb6BWUFAgK9XV5QX3xZTAuzjKFt8XptTkxWeXTCGcyuxzWtKVC1C8QcXVfd4WpFHnfjLw",
  "key18": "3wmLNDVjVMRiFjYXEybShr1KYzKVrwMXZ4FSGBWW2zYiBfVA9djZuhUMZTxscRAEugR3bNz97ETekYyPHgEP3rwM",
  "key19": "4TtSanvPjnZnK2FC4SZKvr3sWnoectQ3u7z6BuJuAjxG8N8dsia5e4ocHrd4KDQBijSRQRL3wTkJXjEpUqJuxBps",
  "key20": "5g48hJB8rQ5n6eUiKUVjnRJMtw68iQZB6M59ontKk9RJsjTRD3yusg9TsDVSCdppcUpBPcsG9AmjwzwzCjGB6eig",
  "key21": "2KBmvXUvCJyULw6LzYZGytdnM2jbNpqSzCLscCC2YYp3qZBdThhmMKLeYhrixkFwkDgoLDAdrsyeuu6n7fpaetug",
  "key22": "55EoT9RGK8fkWcemBCmhcAutJGwpVNFtPvUiJ34nhKJT3LiLtVCW8AwLEYBzMhnMBKsUn4MyhGb677cVNU8y6xvk",
  "key23": "4jueTQsBLAcHQEDiNWhTqQ4dpqP74qbNCnT8egyAP3V2y7cRtUtWonBM3o5WGLteAipL97dKfjb6NpWGZVM2SAGu",
  "key24": "3iaM3qpXzuh318169iPPVp9s48KZ2rHb4jCiYYdALb7o6vkgQa286Zzrec8PVJ9U9VTR2J9gHW1MRj2dzChgcPWy"
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
