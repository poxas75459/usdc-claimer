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
    "5Ks7Uk2mfunSgKgz6kkJgW44dxVegfZ4WGp6tkrQnmqTixnQ9WMBAWeqgcUCNbeK2XKV7h3DeU75mZhmWLV8en8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jeqp4p2jSjfY4MJ4785vpWgpiNhqxwYgpkqyp6qKDGnefKuvmudADUUUmc7qkQ9ZxSH84eWHC5AikJejsxLs6S4",
  "key1": "4qmBGUvsSZmx3vcMgi69kyWmmTygdwRoMQojM12b1GsPVpRHijNGVfRfFHzPVQACrrCYwQQbonTqyqr23ibaMyjm",
  "key2": "2TmYNc9cEVNuFKyW9sNLX9GYxGf2otywp2zRYA3KZPS4joLewcAjBB1KDLo625U6Aj9GDCjVgmXGd3wcUkRdB5a2",
  "key3": "56uYTHrLZVvCJcdgvm54X3twZXWvRVdp2aypafvaU7BoUtw5VPT1ssisqZLS2BAmVwDwodCK2haGrV6Hor62yeaT",
  "key4": "5qb7hwuux9Q8JVMv7hLc3SU6oJ37B162CdbviGLrctTvgaUHWfXiu69ZDr5NgyArYnWCCybzpf5nJWokc1jj2k2S",
  "key5": "37YQnSTZmfBXRxmeTBZc5wwnaTBQ6FyRSQBVGJcEVRaxbYQWepWiEihuQPWGjUdNaxPSAExWC92inEwoHq9C6Upu",
  "key6": "5xGiiKCy8ByuesQdnSrs1xGDDcRf1pzMoieWLDNxRkhAbrHAeA796oxNifKeMbH9HXAHgkFYs8aY1Uy3KzBx6Nk1",
  "key7": "4DCbvX1QeMpXkAcT6aeYrCRc72AumJzKNhPnTiu5s8KtnfFkW1nttn6wjEgAYf5RJzphFEwnsHcSomBHjDjrJVpG",
  "key8": "x4zySQb6uJt6PUbLfaF6yotDq9pscspeWyi98fKdqcbEBD4erAtosZsDnHfYpuvYLjVKZ3SzXWHby1FW7YmiNHa",
  "key9": "57m8RQg3b8DjuecKguCnDyN3LwXZ1PkSgXuWJrnQ5N2LxMeTadAkt5KJeMjLCkbf3mk5BkX6539FK6eFZuRMA6gt",
  "key10": "w1KemGnWX4gBPShsEo4Nd4YTnghLKvhVSVMx37B2QG6KdpN9FVWunRXq9kAGYN5JY2BrhwiyiZDSNncRTuRMtpN",
  "key11": "3PSERj1Y8Ztd1tXd6QUYtb6zjTsRp467y2RbShvgitUmMbrkw4yJJQZKNF5kZWS2hKtW34KQQaji6N9HUDgeMN6R",
  "key12": "33nwv9inoGj85BFkhwiUyqSaLPhzNbFdgUSDnNJi2enzf9ZMDYe6KYAzaSVH5yopQza2mBy287sKvp8h38QavBMX",
  "key13": "56HWHt7719R7a88iYhSZeGyYZQbXRCZut2NPH33df7w69joMCfHiDHpgZqtK8JFVwnCuSXGNmnuzKpVxwqyKTZ2i",
  "key14": "4oh5MjkpNrHetQXmiqJtB9E9QkZ5NfujUWA9eayKsmdcJpw2yDWabeiXXE9gGUJ2dsjNPy1WBgS18rEtqs2ofYhg",
  "key15": "5XEajeq5wJwKHZbp5M9CWxKdF9utSXbzK79yecNqNMKAADLE3nRLD5LQLDQUoG2cXHs1pRgkbG3kDpbCqoR9HMSV",
  "key16": "3WtU8bPwoMLroQgEuqEsvsaMuTTtoRZabMyepqD66e1b7VimqLpmpR7SF7BVEH7boCZNR5u7d9iuW2DFTA7YLWt",
  "key17": "56kZGQ5WM6crkuEScthrL4mc9BQWk9tZzsWwKDNEjSnEJ7WcbciZgm2isBfyw9RnQnUKS4qsSNvF8SgoraBpTFuR",
  "key18": "3VZJeSvyYQAn8TLcMqWRZ6VCBX47ecHbAvzuzsXGNhz2g2SRkMvFGzoQAehtCd8i5aeWJ6synsmSxF25nGwgL5Z3",
  "key19": "2yYu7gWCcnnnwvbRgmDyKu4ga124vdS3HB2GBD2wdH9vNVTu7CYjoF3iTgqsdnvkJcfohfK4MYkC5UFqEaeoDiap",
  "key20": "ejMFFUwrovduC5gBo1P6Kf9CmYZXKex96dyqzXvf7aqn9hzRauoahx2DrpUbynyrecKhXomuA8AFoh6k238N9nD",
  "key21": "37mrW7CJ2kzewyM1yVSS6eWHM31KQETWZaMSKnH8QNoRGQ9uzB4eRvEafJLz1DHhJ4XDU5FReoVqv1fLVoTDdDR",
  "key22": "5XkzMi2ojjxH56scsPFyaXxWSajiWYEeBy7ARZquebvjYr7mR45gwMP9wdSqsFwy8BxWmvZaBnxwtme7X1NnVG4v",
  "key23": "38tcY2CZMHQVjYUC8wj4ragqrzWMJzEVzxaqsWFxE7nDbjYn8xGsB5mdkEcc1eFwNsbHE6CDmQk8Np53Kd37k6s7",
  "key24": "4Jiay3GjnQkittcJoemH1eC5kXd6FpebxcCVsBwNVMHqKgMiKPaNsbGCyPTmDqzsPq2y6hiuW6pYetUJwmUeHa43",
  "key25": "4xVVHwT7BN4Sd7kgFDUd1ixC2y1cLVMadfepWvusaUK1iNoxw2DKzp9iHVpcNbPM83PvvdRH3Jvu5P2fZSgjmQeg",
  "key26": "4BMe1joCQQix2kBrwUPrE6Ki5s326zfDH4dCXXQiGQ4aNKpGk67K778zjAQRRF2hzUmidnTAAizL92gS9cFyUUnV",
  "key27": "3wq2Zggui8JBXh6kBFHnEKGBVEWuRkAMXYue5HYtEGSrP8znsNoGW4zyFvMd7K325yW1DvFxSBs2uY4tfVZyJeAa",
  "key28": "5oUvESaN8zVTGERd3YiTkRjdPNn8XR1B79gYawETExPA4d6ug28TQoe43uBMNGcrf24Jx67E4t1nWMFddXD1c5ZH",
  "key29": "Fi5Q5VVhxUtquJH6Z5qxwYebrspZtgpNgzhPDWdkELoLo7ieRHyxjNqpEVzUSQVDYbr9U3zAufeVwTf8bRc1R1x",
  "key30": "3YYFzHJgKwEneYcTYgqGcMoye5p6jXrs3YM2XoqPSDHSQERhiBP9JYaWJJNHjcWkXWWhLrUgBwiobRwGL1YiUZAa",
  "key31": "sqQpoNiB6SovWghkPLtnEiTFi5B1SNJ8EN3tEUFWfLdHBB87Q2pbU8FRttrmSj4CqNCB5UCXq89Q339N8vyqbac",
  "key32": "556XRQqpjpypw1CgHhqcShWQWr9mJC3iDMykEmVATGKbJAvWyEGURuBFbeWZCtv3dphMKKnyo2BGhRCb68o5cuew",
  "key33": "3j7mtyGFSahFmL1QNWXfuvekZsw8Fv4AZXBdhiFzjYrkUBdxCoEAoTGD3Kt4aS5PvwJfQmTuXNzz7A8Zn2KrCfTA",
  "key34": "XQu6wrnY2EJWq3A5SpuPtRrjWDZgvMHPKXWSXEEwzmCU3aMeUYHPiyhn1HD7S4wSCbmsitrrfvJR4SoNiYH3eqy",
  "key35": "4Q3G9d8U68Jrv4jo634dK6ZDJXC4epABtfQbS5hjNhr9f7Pm5JK1eXVsqbTUpvijJmgNKt2Zanw754wCt2qmbpXh",
  "key36": "5GxMZZw4QRxshBqeErs8gkmsQs27REF4E5WHi2JtJRzbeutgsfNKV1q64tCG651aaawySTCKBfJCMxWAWzvimwFv",
  "key37": "67LZJWdNmTZVxKicYwkJNcfEg6vBuGoBr6WcTDZgGrsKJyTVMPQgoYnBPtZ9xH4933uTGPZum1CtMTXgfRjaKxra",
  "key38": "4UGPfFCRw1WV6sEoYU5s8Yp81CsSg74MRBdcadMwvt1eqxt3o1keAmpSnYNueLH7eqy9HBjyvEJdnUAob9sfjW68",
  "key39": "2orhKNMfxCf38TArrvV85EqoXBwmAKebfwnaS7rp6YmSTomyJ6Ut3aFv8dU3iJqH39GbGATGf4Lh51EajnvfdJdz",
  "key40": "3oyW11i2meEALkKRdpnNxwPQBc5TAK2nxSmLcH71Swjp2BuNwJo1uCvtyccQJAhpEMYyxxnYcHUUSNQDAF9ZJ8ky",
  "key41": "4t6mihwuE6CKLg6UMYKAWsUkfr7JAoeyLHSs6BNahZTJc1ceTJpyM8CL4K2CNoDQ16PV1z71fNwhs3FWYxvJMzDG",
  "key42": "21HxgirNzikfkrc3BuPAnfwrCe1Xcy83HURm9Ap1tGv8BJ4aVmaeQ5qzLeqBQuSJHM1N6dMuWBq47mcYCEXv2Lkv",
  "key43": "3KAUogPwvEqjxWnpH1k6cAidFayVRyNZ8BdVcaMukovbfmvkeAywCHSxZTn9nmmooitGzHdhf6UdwuTYKX1mt49v"
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
