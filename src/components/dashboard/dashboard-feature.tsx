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
    "3N1VUTPRUpAPSZaXDibehAdkcXD3LZ3voeb4WLsRh7WroGP86XReqRpLgsYuUmvaaxrvZkcM5yCEQ7NPzxPDC1VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RMnhkJ9HqB3jEhqfQ85VBXYFfjJi1P2DXPnsAcgeDN497D5q6qbKAPYPhXFMNKLhMu8DwmEay3Hr9bbRCcBZxgo",
  "key1": "Y24RXMhSdSkBs6wEjxUwdS2P8uogasSTucVMLWBRgBAAJYeKuUJ6ncMWtvoccUtcddUiLD6QLWBVdfyFe9qUSdW",
  "key2": "3sB5CE8bw4F6jHoZ6Z53rDiTHbUqoYoe4wQyfbGnnWzvU96Eob7NdfSLiWN6ftagEkBiG8TRZMN6JcqqxNaZdJD",
  "key3": "33pxSdkVXXDoWecz1dinujwsSSddrepLT6uWCzwoGB56jrueZqkCK9omQAid7amoyWKhyAFP4XmTMoC2TKxTnZjs",
  "key4": "ycPCsRenjTqbvCS6i3HP3Jhn5GBYtaeerjcnyfu1D9NUZ7cSbXWVxZCK8dE13QLpTAaAC9hjo1EDKP31G2PSBuG",
  "key5": "58ckHVHmnxbnUUoWeVjvsRZQ8Nxkg45BqFCsTisVPNv7g1GWkcq9sSepHHLDa6zE6KiUpTVKcig5uuVjbQ73VQ6f",
  "key6": "4RN4wajWapFvEsoexunJHA6NahyDqfRgN1sd77kpibEEZvoH1rYxZbb7MexuY5XzuSVoHM8N7RJH4e1E6fyoTfT3",
  "key7": "2kA77r5dAjrPUnqsoYpZDQGMmdRtKUiE14r86EAi6gu5uLatV2Efr1A4ophfz8UFdKqs71BrcEhLPyUvXrbW12Ls",
  "key8": "55Ews6PphNVXrors74Z18nZuc3VniKBLf9fjDvangmWwUMr9GsUEttKeQW6BiSyrj9t9kMSwifCUyPdJZJ7sphcD",
  "key9": "LFse9Fd621PmawJoDN2gZajtcHMK4nE7oX1er6HrHgsPa5PsZnBA91WDcQPDhx7f2sUFp85kzJ8CXpVcVjxFgBU",
  "key10": "2hibgcH1m9xPfKKnR7g1P1MYAgLmwk3N7CavjqxcLns1fYsPgBFSM6uZ6GyzzCsXX7FfwRoRA7VfKp5ACMhTSqSG",
  "key11": "4Vz8ikBeK5z6ubCzXAMdgfDN7V4p4Ph1AMrxSTvqR7nbwH5Q8FxHCitcXZMvuff9vva7xKZwuDNkjtYBqhbqzqeL",
  "key12": "44uRTtyx4Rd7L3enGHASvUX2wQ7zAsAx9Hf1K7ukZt5cmuFpshUptJqhKBHvSeM5NjWxn2DFpdQBSn24oXW9ng4i",
  "key13": "3QxtGpkLwutmzYgyKyZoAecoBfWcDi2cG5FaUfmYZkPzd9QsNEFA4NM1R1k2RNzUWoYBFdVDd2DL968S49zzB6a8",
  "key14": "4nw1phhNuekd5jrmy2jCknq6rdS7rWhwENWyyePDa6jEX9xWtokZJsnfnTVtimcoKzuKWePsBBypygJUaS2BBi8n",
  "key15": "3BEpKr58QrCKR5eysk3MdjgXwhhwpx6tycWJnt7mzUDgED9DB9yu7YBQF52yRLtGKRxQ3Fe1o76BA24JkEsRigzq",
  "key16": "3fDYJS6i78yY9AFAWHvXkSkPgwbyqqa4m2KrCRowxgN6oNNAAnEADshjc3dUSf5GGK3DK89L8U7UMpD3C9bjLu49",
  "key17": "48TKGbb8CMKikDXa3mpfdWc4scCtrry2cLnubCquFJdsD3SFy8KCY1NLAqpgP1DjcCinekdzW4W7cjwZPagX5VoP",
  "key18": "u8CT1XPFGFgtcdvnP6JM8qmh7sysQeaHWMLwXgoXMQR2QghREL8s25p6PDJPZMEt5rxmV6o8TRKWRptGaETWtkZ",
  "key19": "3T22LZypdmKZqytTF9DCcUSNwYEyWZFi8oCtwkg979ck6nseexvvsy5fBXxGwedT7vTqoo75pmZAmRprd4JahUMt",
  "key20": "3ycXYAm2N5ESdM8VM46a6tioEZcXWEkxSw7MgokeW86SUMaQmBcW9WKoSLMiNWLe5vAFbyMdYnAWnn1fSsWpka8i",
  "key21": "2TEEDhGaHDdXDMXM7kRmwNBuDfjgeZPst2uhbr7TYr75jJfQ7geqvmnXoa4rL7ZjkMXJGiXCxoAuAPtAGWSgYrUg",
  "key22": "2iSfMHZPxPJxrvkgGuUHGDP9dQjSax55aKheWHS1TKg1LUbZ3BTkRBbQZNbmuPrajBJyBwM3QmRt7jHjnCw8MExa",
  "key23": "56xjCZig1u5WaMnedZ8ywYaESSWMCHYzw9PZLYdqLR64zrJfAeCydG6xMJoJBaMbHFg9HLajqVUBn1qQMsR5Ghhk",
  "key24": "3pRJcLSYoBocxcJXnC5xD7NRmBrW6DZ4aykZEXKJ2PqFp7jzjx8VdHiX6Pg15k2gJoo5gHEHmf7iae7S8RMad2t3",
  "key25": "3DTGRzAFg7x87J4FuhJ3i7WPoMzp5C8ecDWcacQbo6oVwveMrWbUwfdu2XHDU1h2SfSgNhXGjQ5bACkiGWPR2tk9",
  "key26": "5MB4tsxcfRGturV7r6EBhv2cXqFu9BJNaozAtUnV9C8U1nSuToXiYTYgELmqTWM8pZbsHvmReQ2Was5WCTqURobW",
  "key27": "5WB3aKXvXR8QgcertXTyNpoTudgmfUngXbUfitBCW3D9ZnL9zdVcsKhMD9ebBGPhxuXyfwWzuTs7KC6LEZ2pPQ2f",
  "key28": "2bgCAy2ZYSn9nDivWRJxKfi8BWKDQVWdZjxWEBbEnUgtj9Vm2LZHVMErpibbd4LsxME44eq7VfGxEjiWqcCr26zi",
  "key29": "4WrQLYyUNEAVsCFquFnAVXBqNSTXQ9wa4bZ1pzwZ6H4wo7YRgSJDufuSbHsLAYW9BPkHKzkhrVTHgguTxrgoRTQ1",
  "key30": "4BkWNQ7urzzdARgYMQUL7tvHmWzunvCBQoeTytv1bczwW3p2h9pNtA7g8mZ3czma9AoX1VxHpAD3w9ysTrYVkD33",
  "key31": "5X1p4yCP3S3fdK5vvjsSh57CQGY3L1XQzmN9aVHcXt2tnE1r9rywRFr6YcLnqSiXuzTgCcmt5dgLCQyMJSJ9ugLc",
  "key32": "2Xkbx9UG56jpaTDu43Lj7fYav74Runi85zALbefUrc5KLyBuwJeV9vSYbvpTX2bkfQgZdHeiZko5G5JftJFxiEzB",
  "key33": "5YeJibE6jTYSfWkRtJHDZ48yJbV5U7tBCzQDxv8prqsEguckwG46Uddjp6J4dk5839opCv4xTnN1VcXoPPbNTwxm",
  "key34": "4XnGJ9h3Ck2ZZfgWizvHiAXg1ZMPAnZ9WEU7bc6Veg8Te6sL8w4FNyW1hjr2VPnKaKcghVm6DP2Y72ZaoqKmv2tx",
  "key35": "uDKbyRX2ZKSF1UmH1a3SpBzd9owjyTuDFvwFTnpcp9rv6hDJzH2eAZpJabjPNPcck42tFiZmjL1cT46bYJ2UjWn",
  "key36": "2i6BF2Y1cVcTaoda6NoY9hwRMsjt2ShS6tAMHePWCB6eu7yQTQ1v7f5gmWQAuq8W2ct5DgrTX9mLBjVMyNaf7F1A",
  "key37": "3EsXE68B1tsQWmpWsNmDuaUMo8zmEagADum9bd31KtVH51jx3tGpV4e6zfBzd5xL2vUg9GKqDgrVzDfLrHoNH2M5",
  "key38": "2n47knUVRkZsyGx6Y2SawYCDzNU8hpzNZsvRqD5QKsjLCsdhPHkMecavTnNRNsAMkNzYWdHLUFYB5WYkSSZcVSHL",
  "key39": "3stnEVuCmibwFoYE67JwwThtK9xUpjr95zFC6QwN3kPHo5omFkZm3erFDEy2ZpAtHJbJYNYoss8hoSvPbmnKbXXC",
  "key40": "3bn5S1zQVZVwDPE57wTvczPtnp5vKgvDee5cb9cinofDwJrSfMw3nuhj2FuZYVNP3jzAmp6X5CKLZZjS9m7fizcu",
  "key41": "4ksj8CUNQCEGo5DtMbD7SaHu4jCfnUpX2UF42ZevWrKskP4NQCmWRE5ZQGbC7irCSdqdqa5d9NQuPKFzEj3a7LS1",
  "key42": "5zZwcnYQVq2R77RUt9D4RrwykfJnn1gGLCLpWtpcoGhnZov5yydpJ8vPoAnozqPF2y7x8YgdQtXJtxvRwbXG576p"
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
