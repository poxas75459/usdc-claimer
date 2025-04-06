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
    "4KCAD56vLUXMK7ZBUbmzLjbNi54PV5ApAXAEXzWqfxvPdoBsD4gBUetsmwXeqQ62cTwaAcvRpYmf2XeoTmDbpCWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfTvDwjVGJMG3uYDeEjtDnJKz5rSgNs6EUtW9pgtKkmbq5u8fUv6EEzAyn3f7X7vTvU8FrnYgFTowZmzC67MVU5",
  "key1": "etbT5NnnwtZFayZ3j96jvj29MGXZLqkDhCRxEVmoyFstC9CHTN1VVQPykuJkLxx2EpZiqwDeSuSrFdK5Ef1VM3Q",
  "key2": "2hCHXfPwvpYQEfNPbpUHJGRxzsXxPQYCv3AQTLtDu7yNuwjiNkMJXtmSv1hxxHi7hGzFrHFpDepUdTgFM2xuh7Xo",
  "key3": "3iUhtZYGwscjeymfXv9fXzaFsXUKaqY2FKWh1xfsQyvdNTvFCJ6nPUHYrEXpgawgFT3qstT6pnvoeum9eTynAxds",
  "key4": "37DF5ZoTXSVerAq8vTJmFgbfuFXRhNtFEhJCWsJmEjEouBoBrqRCtRPStAfJJfcftCATkrFRXJbk4FbwSEpZ5H2H",
  "key5": "E8b27TAnRD6t4q38w3dsdhrJ6pcPxq9AjfEeLoXHejzKSpMoGhuv3wYEPfHHrZ1M4S4Bb9KmhcUbKXiqvVDDtiY",
  "key6": "34SuroENusLdWddtPUc1KftWT68PRNiMhPViMUhZm7CPRcWVjYrWFzaGgwNYzeYdEHm8GkyBUwTVPag7GJjEBkJJ",
  "key7": "23vJx9QuJqiZmh18Y7wTMqyaDrJCMCsrgMfMEctmqJJRRMLPdq2edisPviSkV4BHd4V2TkSx99gcVG28ASXmq8ha",
  "key8": "Y1LqgfvmKkwdQoHg1B8qbWmzdhtusrcPDLiwYZdxQMtR1ggq1d3feWkD2u5upC7Gyk1Ew2X6whSZWJbvbvR5jqk",
  "key9": "9VhjCgAUgXmQPD1CG1LdfL6McRDuPLHvgo65EmFbmW5nzeFKgD44HC78eWsYR9J4nXGMBot7Ja97BgkCZYJePWK",
  "key10": "4bYyTzL64F4Do5TzKUW1KYUxDiT4rdGqrbdeWLvHd65Sd6YdcqweSMWbraWfpfNkcYqHQj68UMozC7zgEripJTE4",
  "key11": "4K5Mv1VeVipBULvn8o6e8PUfQrgUgapy4MKtofKBXqfa6xddRVrZUD26aiALdKZ3cakwuGTBC6b6wxQDuTAFFYfY",
  "key12": "5mJVRpKAhLRtUH92SDHk2hJZUs2FxXUsfo1sWbrM3ahasE6hocGV5iDVLMErTFwi5L731Z4ejVf6Ko2RTo1Jpfbb",
  "key13": "3G3JNt4FJyjN7v2KGjp2XSh8WwwKCGStsahzdgi2JSx9J7A8J6hqX5HcXCHCtunaU6iodpuhbqxYHHAxJhK3rnz5",
  "key14": "4GddPbbJSnxe7vdtoqh324FsFP77eindYM5v9Xf6XTcX6UXQiL4jCeMCBbzC4QpPGK2becdsvSjVu6aa8GjjbbnV",
  "key15": "2dRzCPeZmfuoDE33xa6QcWTWQY5VZu6sNziFmjxCP2ZmcoXt3yJfDLLYju3e7AA6NcqbvFMBmTa71z4oiXDGVEZZ",
  "key16": "zEeotE42CRnpnmmkHka99j4NbTKVg7wkh8Szgx2BZ99rruyj3Z8wLNdHyixUhzUSKEm3ixqPXfk9S4tn7zSuiuU",
  "key17": "4uXfnSmTTVaxfTBQ4P56spDVWbT54o7CgG64ESP7KSYzFUgdRRw4PtQnAjhMTejVVAhf21pQRVvbat7avvM4GHyq",
  "key18": "zj4vfZucKYLKhXWzDSx9hsdrQBns5Kr1BDADPd2hgCLyyKU4LrGFTwtqNuvmGpRM3ximY3NLq3pFE7LscJgJcyZ",
  "key19": "4BYaaXD22Xcq3mD7C29TfqhBE9TU8D1XRdgu5EcRZ7sEeMzUNrdDb1raRGkSPkfyfppbJ2HDDyHkYhWhAk22huU4",
  "key20": "5qkupMznisdSabjvS6rBVAPp5qP1XeEYLgSVJEDiuaq7dBU127mt1k85JVn45HvPv1xkjWWStyj5NK9pTjUPiLBJ",
  "key21": "52GQHccnoFMgZN873RGvkr9TdweznjmLvtWWTQ7Kcr3rnUMBSu1VfcRSdLcab7caZmuFXCuRMc8kGBdRi9hddnbv",
  "key22": "3zuw9TLf1KYP427sU7rXJ6utuz23LrcMkGMnWWfL2Z2zChXtnGau9TGfQ5LZy1gwzpcva7zEPebPrPWfJad5Pnae",
  "key23": "22dTEofYYccaUEiAFVaTCPJ1jxMqH6sVNKkd4wqwQb7AiUYsP6AG7N97JFn2cWzAA4CWtS6rmpTnbAcfG8WBrAf8",
  "key24": "3tQa7YyyAkJQASPFfmPPjjmC8C5ysqZaM6T88TCFQf9XZPyVD7e3giXjjD5zW3i3uN11cpPevWwXj94qFJvvuaHF",
  "key25": "3ECvnNMrQZHVXirmX2z1ha9Jyuqt5qH8Ey4MRvXnw3Qz7nsEWdnyc2espAdfeWHQHe6ZEzVYX9E7eW6F6jwpppwu",
  "key26": "36D4n6oiVyTmdyttxR9etVMGkm5cA11WoHsk6f7cHfWoeaPmHZJfZDSBTqeNuM3YzngfTfR9pGXCPUgYy5a1wsAg",
  "key27": "4UypUe9tpRBW6PJ1tPAo3dZnz2m2KDHC7xp74nL1eT3WbKtqmqFMwsFom4YmFK3115xDznMM4K768EH3kvETfwPe",
  "key28": "2cjkBjLBjxFHEFNK5uvnPuEVejp7rdLK3bHnZmJqmdx3gxFA7EiNAZLfDcTuJNwmffYm1YzFCsXYgsAqvtV9NRXq",
  "key29": "ZT4Hb8sFuDmwQsqQRytfZU2jnRjrvMaTxdiiSmVSCaQUt4gCCH1YZ9Z13yWpFzXHrXBZiNTqyW7UEdSdkqk9ePh",
  "key30": "2dbY925CLKwjhecupFPfrKqRDM6NBFq2cF4NWW2ntEvFWhDVgEXxZ7EE4RMjoEL6vUpTuigpmDHsiZRBcyqZF4Wr",
  "key31": "5AsjWgqyGDkQ9zwL8LY613JNy66XU88B9q8rAwphMdjneX7HoEgXQ1vGhdna1Jnv8pcjfJpEaEnpALLTqMFrGDEw",
  "key32": "bats5ph4r5Lzpa53eibSeHaeVGBL78JXBChgkFqvN58XUP9expdqRpnbxJAs2Zu6ThMxTxrxszHpc71AV19Czrj",
  "key33": "55Ctsdb6Bi1U1FcbU9ioAaugSnKD29q8CtoKAkxWYq498YPR1Grp91aMH3fsgFvzyctbmiqJ4VqWfprJt1qtqgvk",
  "key34": "4PSZqx7rYqisRTPVww2VMPzyMPrYCH8fN4r23bMXduaoEQZF2XRLNKurz9FWKiVYQ6g2hswwsFYSF3cCh7CY3Ry5",
  "key35": "4Qz2Fd2qu69v2tJ4fCBTGqoZtmTmhSMcLR8gB2rS2VZZV1GKrTqFSqvuZ81sQHk28WAJ6PLQDbZgRHkFN99GrtQR",
  "key36": "3ovpRC5aokJzQzpsKUCizkBipPwAPQQf3CWxznYQFsocsvBiQ1HpNZme9C38p8CiEGYrc3GVDyHbZUVLXPqS8NBf",
  "key37": "2CyXX1nnc12F7LGSYAGyA6pUZbcT8gkx1FCxEiCetCi79qiTXU52G8n19cPcAS6vwcAEkwVVE9ex5fojq8hwasDt",
  "key38": "c1XFs9NBoH3uKTZxDi3gXGGRFWkFy8r5N1L8S9q14PQUYKMPBwrtVwTUhDtjZv8YRn477BjF5xGNao8v2dHqoYF",
  "key39": "2VcfeP3TJ8ijfpT3braKAWDfcu2u8VnXYihB3A3V7QbGDF3X5qRADFyG64bin3SYHBNCDNEnX1GytKWVdoRvqkPF",
  "key40": "2KnexCmMF7g1Z2fJJxFiFx7CiL6tdtJ8kUcb62woMHoRxRTqcxm1nnK9G3vZ3vTyQcwT6jK5VT4ndDwsow2HEVwi",
  "key41": "jY5XgomCNXGh5padhfSCBSnsZx63GmWuRuKh13SjMS65G3wBiqwvmx7KtdqQz2f2j9fKTz5jAPtLxfSyxHgs1X7",
  "key42": "cNwpFxwWZ4W65nF9RkeT4LQWwMpA1bdBLjMthNT1zwjgW6599NEi3iwghCk99rcQ55PEt5DuXN2dFeBToKS3CD4",
  "key43": "3mb6dwijNucN8Sa7tekGSDbRipq9hVkSy219xvQE23SpzuF6LsSmTNSBxFhZBZbcSofZ2JZxpx3t7Hgvt2DgvVmv",
  "key44": "5gqovZaHTNGPEi6uwtvuqQ8QB8fCEz16JeeZKGMJapY3rEajdp9zD6pND6savioBGt6g9F3qJdtjttH69zXp2efa"
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
