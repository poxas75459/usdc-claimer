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
    "2sH6aeVvcyNu9WMP5NyPffFz9mbBBVSEXPMWMqaxvXdquXhpCd63SvQpq8iViCS7ZgaB4vW9oXsboi5jb87NANZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vx757BdAegHAzGpbD6B2CuNonvogW2qGHx9ZsRPF3piMkzfR9Hmfz5eqxr5yXHQCBGtm6jJmz87TuuGc3Jkwq4a",
  "key1": "5sx2XEs5ur4yxd6aioxR8j2aDFayKBqJpw9ZGZadAajPnotpvpQzMP3oCFWXAfk48DzAuAhYWgFWeCyfwFkfJZey",
  "key2": "54BoHSFoCukWq2wH3SJ5guRmMWKGS4aNJEvDxvqvoC7mNJh5tvh8q77QJMVNWRGE5DLBTa4AcMxN4J8E7QmjEvEj",
  "key3": "5H8ZSGoPWKWPbw9EMawkShaH8sGS4iE2w7AVCcmeHowFaAQdknAexmKDpnKS9a7LA65891HmP2pq8pAJsBJpYkGG",
  "key4": "3tR1DZeZdEnP1zZzvCEinPCjXj7BbyGHgpzDPeM1TUtYfGNhgo5h3HVmRcZVxJLFkZTD4W3iM3ugsL9XnARNnx3F",
  "key5": "2qNoGHZgBa7RGkEQWWwZBuPVXNEccSGZ8T5yy7G1pdoeF4VB53sGsKpWwejfHSJXwCd43gvDqRg9eYBUHLcYjytQ",
  "key6": "2PCa8B79WLgyrfxCKKUuCB19mfgczBWXVg5QE8dtmCDDsoF5Xicd1wp1rHQHyxr1D9U2u3VC1H3zsjwaJtL1gXw7",
  "key7": "2jPE88A9XgctDGvgqgrtyXyCMWkchAf2LDvx4BnFFq7p4Aiz2zAkXUq6NAeVEniFGY7NXgePUB1A3vjd3MFBsxja",
  "key8": "5kn5UUWGkjj8ytHQ6KaxAuhhfhvaJa394unoqqcCoJ7gmgF9ByzyYnMwoqJcYRv8zH3jzsiMmsxZ6mgTcJkL9rFW",
  "key9": "5Fo772Lr1RUJVbbyXPzE8QLXrzxZidDj29pwqJnThtDsAxx1pABBxm4NiaPa9JjuAEdmNT8jsczrYGZWNGZ8n9yb",
  "key10": "2oUTWUsTqDWDKBXV47wVYuEuyKxKtqS4KcdbTQSFiSp4ciEzTfq5u72cs9RYLPcHQTAauBWTg3NQjdTRYoxJcWkK",
  "key11": "5AGb8ZPZ4iW2TKLiGmiYnkRg8GPHRQbGdQ2H7VU8yWH7Xp1c4s42i8EhA5DvWHvrdRb6fmbeaqUFZU6Fkj9ugVdd",
  "key12": "kcqH7QeVwDHTwCE1TZuqvXH95RqH3yvRNepD48FkPysSqLEgLcTG2yN4DFBhyeuYAmdXAeLxDtu4a6mKqXGwRuw",
  "key13": "3C8mUu5zqMQtBNcGjQey7xCD8wVHd3M1Wp8YAkYmSjm6MsoFzyMSWfBxuKtbcsBRU8c5imkPkGUo7vs9eUwr393s",
  "key14": "5kQ7WASinWfYczh9ik7s7Y6z3dueHNbLGCsNXxvNLHyiDkDXaNZbPzGKNFyXcP2MpgYGQSQaKZHaeZiP8nmpthUW",
  "key15": "3F6ZmDYCX2eGeZmyskC26QpBKuggN1a42erm7buTwPMvydH38d1Av82yffh4RhBgcMusypURR9JXkA82tWxJA3Xn",
  "key16": "5buko1HMX2JrwQG1rqytcz31phJxrtydrhMZ4Peag44hu3VKcgd57YVhNLrk9PRhgBJGtCLxH334jdgTrydtPxJT",
  "key17": "2yEbHv9oGRA7XWaNzK27BRNmbWueHRDdYvU14HjzGXbDYcq1SV9mVnxJZaN1a9FfzzsfC5qqrUrgecSQE3wREYk4",
  "key18": "W9X5uonLXtC6RjAtxxWDkqSsoRrY8rjfVjssNFBsKjhL5KBmFrAqgGtpukoqsmpDyAyWGy5yGp27UTPcYdsKXRm",
  "key19": "432TpaRfcxL9yUbNH8bURWaCeshpCURNZQVuPHVBTKZRP8T44RGLo9NWQc9ifuLh7aQrRiZyEJ5FcXu6pVNHgeSz",
  "key20": "3kK7ZX6bpC9K86tTPT3mgThfRaV9ra4TMEZr7Ha1jCswkbp2PR9udB2NSNhna6CBawLGJcQB9KmuCxHu3KF68cqj",
  "key21": "2BgRmLYenK7YP4Zjhm9sEmjo4WaLjNKQ2TbpPCXZPChrEpMPbHAQ9i5kbNVVsXc55mv2kCfxbYBC4ZYc5jkxEDwy",
  "key22": "wQDVEuLNCcG3MbTG7yumTG8f9ei8aBx1mmNSjcob2ySTA2bEPc8j53S8Y2DjfwdGmNTGNbfAQzVyM2sujrWxqX2",
  "key23": "4NXqUGXuFtfpzAgX3MPPKpTFtzWKZNn8UKpQKPUXdYGnsNRpniLD3DB2gooHvbyKmXa4CxCokzkA5M1mVFcs3TSA",
  "key24": "28gehhxHqLk3cJHvfTkw4zQF6dyFEmvb5deQTz7UWtXBdzDsGfrsZmY6KVsbJPPorEcSQSHq4vsvpQUVw33pspps",
  "key25": "2Muf3MCi6vHobhNusrLnVmvjcRhXTYw6FTZsHyY2aCVJ5AaUNqDXiEJ7P6KMRwq8EmQPE5ZWdi4qdwxDrpbgN7rC",
  "key26": "5F69HBNg83sQFFYMb1PYp7fEhoC2dgrT9fd12Lj2NyNfT6ebi8XsdXC7tyxnv3soqyR19Qss3SaC8kcn9SAAEfDj",
  "key27": "3qroQDt2az33GHKL1zEUNX8VCoCKPPSZ8eKU8L6kTzHSU3t71B18RboKiLH5XTpyi8cCzfu3m2mkH51gxzgd94yt",
  "key28": "53o7EueBpkx1W8XW1fuVkuqXS2PEguiQ1FXGgTyEDmoga3beDJCT7f5tUHjpCjibsK9kTfTMSczke3peYk3uaisy",
  "key29": "cUpspGKDaDugkVuVHUabV8cUSsdFb81PhAwdCmbxe2Wqpj5TUG3AdnL6jDVtmBewhKJj4CRYuYdFtXNEKLrZd3C",
  "key30": "3BV44kLoP1xST9p6MRNMFFtubYEBQECz2e2YShNcwEExTXpq6PX4KAhAod6in9v5nwkJ63KZYv1oMoiHbNDXobRb",
  "key31": "5GbnVbM6J4VSi1S5pbCCDQWqtDAAGiUUsR4bhaLQSbLubNVU2uWEfeS1racLGch6LmnU2JwmLsFiPWaPPu8QJZFs",
  "key32": "2VDnCNcHnNAzom88PYt3WURPnzGAjDVDst2Q6pQa3wYy7VgPiDUnsQ2D3trnQ1kvKDHRCnpALtmcahLnGMbAWD63",
  "key33": "4DgnaSzTzhX4mXSp6YNBnJfBP4LBb7d2HVZyKtyhepQ6DxtuRFTxKMPLGxyZfpCUGmtdXzkKEHo6EHMdkHgSQdBA",
  "key34": "3x5y8TjkXT2vgC3s8pNobBVr4jKq4xmHy6WXfQmAwADL81dSvQFV11yW1Szq6TYdhnDBXaFYHPdMrtXboG3E6BEX",
  "key35": "66WnDHEUd3oNUDyiYv4mjphnrfGWTYMPaoshJxJVMPnsPmGD6vnFHP2DUMqfPeWGFswkDyPQCGBj43XBj6aPExGW",
  "key36": "436BgA3soLfrLgaHtPnkKDc4b96rpJCc2vCxBQqmnVoguVaK3XMrY5TThHUie8VEyMkYmnMpatJVGyMQdyyNuCCW",
  "key37": "4c3DPHiNo3LA9s5NoLKEZ2QgFwGpaXNUXKy5mKZ7vDfjKdeKmcoZWJ3ui2vEAyFQ3EYdpPz75smsKGMBNkiwK2jX",
  "key38": "ygzgaEibDjtVAj3vXS9TECyETU1eCu42dgKa9c3HupaFbqbzVrzwPK95DDTUSA3aRoS8hcFzwADAYyqdLdwu8Y3",
  "key39": "2ZJRQeyyiNKTpLbkoGtyDQpvG55zZjyt96bqTuuH4So5uiTmA5Dn2svgBq2WGRU1bNVnudwBxPBPBwiX2SzYqY5h"
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
