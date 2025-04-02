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
    "2k3mEF8HLAZ6P4K5rxgJ2nBYtqd5zjoEdQEQ6UHeqsbspwv5XyikSCvTw13Z7CWdVnwcDgChqhtHccox77ayd4ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPykNHEjvudvomP8RffggZ9HEwN6H9rbQhM9zMGTrkge1cXwnDRxxtd5JmbpqdvVZ7CjwgyAMgrKP69ykQTMYeR",
  "key1": "gYUwRysYJgPKEFCTzknKZxFLUAvMh3wyjnKgGBwzhez3sCKuv13Rfs4BZuDfnPJQTkxnDDn6118kTz9HibML6Yf",
  "key2": "37tw8vMJWoGaASueR4TtXMp5Yjb6L6wBjRqkzbgzzTR8piupkPtX81an1BE1vjLotU6d235CqmB4DgTU3fwe6rvj",
  "key3": "e1dNuY7f45pQBJuHK1wjGFC8U2DWEViWi6upYaPi47nhVyMehCrpnVFBQsozSPKBDihquqCz8uo2idpeAuUuuuj",
  "key4": "3ESXiU2nXGM5GzgYkti7vynoo6gqFSPKwkCJYqHmrNmEnWoFUHhoHn4TJgWzrwJ2AQ4zJ3FcDxqHf5nbWGz3toT5",
  "key5": "3FuAnMzDvR6Vie5bcasfBiREAny1UWwLTtR3TGj4KDRb2emHhh2Tsn5TQi5ntnkN9zmebZZwBCMavAvbJkCaJHvP",
  "key6": "4yKFqLwGpXdq3NffeybXUwG2WdTGU8Tbhr5RLPp5ccWDdXagLaxizoXmSaodnr2ZpzEBPuDXGYaS9J352bwguGZk",
  "key7": "4hhcXFDPfEsZYYZVHz4QwBFKkLLPGbbhdpPGeF7WUtDPSey6fYZMNJZ6tjon32SExXL6EH45sqbNRxmxGVzM2Men",
  "key8": "4spmMCkLuQJKFNm8fuPS1edmmtWeTTn8nbMKZYAzcJ1c6zQkV55oLM4eWXVLxgqvvVSt6NdLS9fz7Sae6GpEYfHR",
  "key9": "2FBDBuhUSEkgetGuidSVPVd47AGcg4z6maePy3NoC28tz8mbLL9cxwxMGWz3B6C9U14hfYqUMXoB6818HQDBZSBX",
  "key10": "3AjsTqrFw2pRavXk7KEyYHgr9reRxKhAbQJM8eXfuc26zzNestzJmkJWi2xbVVAzesv7r8xmYvRtm3hosKoraX3C",
  "key11": "QQMgJjJtzCnLXy9scNuYvLnvNGgiTQSjCUqrkBG9rwyg2kjsC1tjauZYE6LVfG36TC63HZSHu5YK98BAGzB8WqE",
  "key12": "rmCB6FrBYRQtE4W5G2BdC7StNVFSy8y6XXvF9wMhjKbHvYbcYJd5ME7CiSFW73YM5t52Cqt5hYsqYR7k2qQpTaH",
  "key13": "2Yt5bjTBjLVef869Xpaj1fDreqdJYGMVvfRG54uHcZNLuKf9vwWV5iqY2VtsJMkos9kJ4PMAoSXnmVr5Hw2MpdQ8",
  "key14": "5A4Lp7VoGf1R2T6Z5N5bfoLWGCwXaxP3XTs3N6cn86zKtmXuWKXuTzPi3p9Fw7tyPhW7VZsk3wTGU2ntaYND5AB8",
  "key15": "NAbaPUV9nyhHNvWQgpBL1kpCKn4pMAkrHm1hepAvTBDhiXEHzjfx5oa8ajZwBJmPwMdFBZUvgcZZhsCeUjLWxUT",
  "key16": "4f6ve3oDZ6BGgVPou1gXrFpXktq7ZoeLnPXcfochYJvkxZBBuHEQ8DziHhzcDjQHvr5dEK5qXKbtrnCsrtTNGY4j",
  "key17": "5JKE7CSAEduZ2nuFFo7yM2TdSdM44PqVpTTnCkfW6wph5P1ktS7MqcFa68dgZXCwxG9cNHRHzFu3ze4BTECsFE37",
  "key18": "5DHse3zMaH67HozevgTBCWhb9CxzEpSeXSMANZRhZcHnieDrqeaEQVQzjAjjbjdpHVR61XorJCk7qFPpt5yciWN5",
  "key19": "3fZmadbkAuyrSaEx1cYvR2rFP9eSPmXerx9yk8QBhUej4gLph7kGhqUpcuvwi8u1pN4h6WmUid7a4wQi71GUXp75",
  "key20": "2T2CbF5zWVwBAcYMWGLsxwE4Epc4Gps2NmDuKULzd1iTkuyMcM9qoW3D58uqT697wp6HvShqVmTpMGuoYD9f3XUn",
  "key21": "2YUXDsjy8VQfRgcfoDJuKMCbQKwYCyzFkhc81f1gTG9FZby21ioEjwAd6TwTfpsmtDHgq3zsyLThuEY7EUkXu1rd",
  "key22": "5nfxnDViXg2cVS525YjykAg7mKYcCYtY3F2XhEWssoFjinbjsEnxtp9zRAWhaYZKDhHGT1vh48PNo17cFvPPCp8a",
  "key23": "fEfN6PPKQhYkS9yWXVdKbPmk2mRMVyg2EHQTVGCa4vfG7QaRDTBFYXd1pYjJVDXBnb81XU4M9Eb3TbwCcFXE167",
  "key24": "5Ymso9hkpzeqDgdNGyBLdWGDME3oY8wYQmQWGVuwDpRbUasCTUzMADA5RCnEuUt1Dkg1pznBZF3d5qT6vQU2Zerq",
  "key25": "66H5qCbc2Y3DSvtDM7RrM8CXfHzjSFXocUBBcUNhbMrMrkExfMeeLntvtnw31nDRgfFqoEurseFARH2Qk6M12dxc",
  "key26": "3uCvLhMYCb4xdvwuGjZCWW35X7NRw9TS3KkSiCWfM5Zy7TyHKk6uraevJL6roxXtLGEQyQvs9uYEwj1tw1XBcPRB",
  "key27": "kxfqPg4rexkT2uNWrJmPzxUzMGt8m2a7TUaEArM2m5TrkWdaMySyKJtAVLzR9f9euCHEfW8BgaGDnmT7UhXfKaf",
  "key28": "67GQe6UFLAQAHLLHb4PaZ3gEjMLEBqqfcyKtEX79GqJQQRNvyBhwVN2ryeKej8Ugg4LCruheGSyoG1VeLyF6RBGW",
  "key29": "4A2pcsjRxXtJ9NnanYcbxJSdiunSsEgqdwT711fhPM8Fn7BWxqFF9VLHspjmLDknYqTfJMk2Rw5Vyt2QGFeW3opv",
  "key30": "2RSjmemoFc1ccXvPwWLM6gp6jAPyi2irGM4TCMuo88xajAbnCS8TzTkRnsFJkMucgt1Hutvnkd4wKGcDHsgdj9jR",
  "key31": "WtjK2khGxR7enKLNHZHQXqLe774NMg3E89oNdTwrotczEwRMKiLSthZ4tPqxMsUnWdsaMHoNTX2jgMU7wUtQdcK",
  "key32": "3PBbAhQ8oeHiPW9gMXFki7Q5yoR1GN4gz5WUAiGATFAqeDtfdJwr2uCvCxZhiWuwgUi8jvfgzHTyDkL1peKD1V3o"
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
