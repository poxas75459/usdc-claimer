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
    "5nG8zzFuCvsApU9shbGKhYpBPPGV2Emy1w8HXDddKbL5C8CFLACp2fBTKUEjCA9VPM1QsaQhUwFuQtfgJ1zxjheU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtnubztHT8BAqYKam2wn2r6E1F7mZ8NNwLm3VbGLV8fDGNfN75RyY7Cwd2qKYkRymbUwfKdCe7zRdeeqy4KH5Zp",
  "key1": "vAQHLjt2vAxh1CJdzMyrcX5uxRUBqdLpnhwQKaMiQjLBLrT3unSkTomQhEHBD4hK3UYU2AJAZiEUyoaBBLMwCZS",
  "key2": "2Wfzqvs7RRsHxJkvyvCGP2MMieqaBAbdpTVCmhyXCiP4aMoC3vpRBKFZLv4Tgg8auRRxjqeVbGzEeRnCgW13PH5z",
  "key3": "3KXu4krEW1VxXNvtcbcsxuZ814oYxZzHB6r1c1ZwwLQj1FxfHuAP5aKtpwLR4rqKtKDiytebBXLBC12vQDN3PJaL",
  "key4": "3B6govZsW6EeiShDKQj6WHg5ah7MCmvtCPvrzekSQwZdNDeoeo1BQEnjiqBe8Vn9RiT8udJarq5VTCeTa1uMMAea",
  "key5": "2ovgxtuwhUbjydGV1KSPXGV1sXYcEio4237EaR7H8SHkFny1swpACZ52atyUouimjQXxMUuXmn1zkwzgSncHPkbq",
  "key6": "3aWDS8cVU4pgWkSbyhCxZ3fqoyKqt2nTU912ViJR9uXgTp2WfGmijykRu6ZSHpNEDtMKv83ikCnmm6JXQ4cjRbBp",
  "key7": "5nkS2ofApwxRhY1APkHVBJyxQdVUPyynrtbcdKAA2scj4fMErPG1gTCcthWNcwH8FqaX2HpdPnKkVtUWB8EKJogw",
  "key8": "Cuhf2zRjGtReMofxbKuigQzsZYKsVpxLmrJ9kqbwhXMFhDJMrmBWxhgvRAiyZnPXpP1iky1nPkHJwA8bx166vqu",
  "key9": "4yxxUZoRbieRvXubQMDHo9aMfqdeV3vevSj1QVuT5t2GVeCgHvSwdnPNLjS3JXo4JSdi19hgUS4sk1tn22u54B1Q",
  "key10": "2yiZTE1bL5pCEMJFBLoqcHhp8QEtMyUTLGFxZtENHroi4VWCuhQgmHkqWzVbtvAn1zhMcgRvZtsmJTmxMLrySz4c",
  "key11": "25bCW68RFmCeZX7fw696bhxdoTNyo7j4dwd7onLcfoF2xwPnbJbXduuPXvb5JoNEajY5ibutGLCqksXVEBB4SMAc",
  "key12": "M8qiAzb527cBUWKeDnmMXwWu7KK5rBCz6Gaa5gf6D4Qp21J24wEcayXT48bkUX7uEV2sF3UJahuqTXwUwHh7LPt",
  "key13": "2of7T5LTFcLXxo6BBVnj68cHiTf5PNuN2dBALxYbGrgeLx91iJxj74A2zT3sDoZy6Gia7b3RQuxTE3JRfxHSjNp7",
  "key14": "3QqDvaPwRkDMGfbDiAXx4qx1DQ3v3tjCBifBCB3SX2Kk6esT52QhwynVzY14LETZAaXqxDmnrxr35j6eFkMyHKL2",
  "key15": "4eRvbVK4CuwSehsgAN9UYiNHPkK7wTUeykR98vBdQzQ6pWXkPdJV7CCEZEH6YEscDWAPaT3G7VMg6k7jc47G4kC3",
  "key16": "3euW23x5yvoXHTnxfgTs2uXxJ8mBHVaai1jK2Mcwih1mVdL8q2LmTv3YqK72wY5FwZut9SgpoNZe7EYNXkDGCV6D",
  "key17": "2vuLBDm4p32vsa9vwwweWyf1RHbQas36V48R1rYyJ6nMpwNopukN58ufZ4HA1LUoZ8Dj16zFVhpZsD2ovVxPHsA",
  "key18": "3kFqXbei8JdRFg9j9FRWgdsvpLw7to4cpBvvuDaypVjW32wezCTbTCMxhHehqZZyKuv6FXwJGy14waK4bYrdGnKx",
  "key19": "YCtBpAxsXcxFZ8NznfJ6yBRT3w42ca2dARR4n7eu11GDj3zJjtBXSSjUtZE3JDL29QsHYB56vwEJBBHk3iKecCm",
  "key20": "2MNhe8hdkVEp2vUq4YsPvH9vR9iv2wKBQ8dM9WDJUz1pgKPB1MqgHfgkznercQaTbXccB5ou24Eqc6XCbGhn6WLV",
  "key21": "44z356vaR4b6s1MMZpZb8YnirDMUSBvG8MknTtEoKKjsjWxNa5D9CzKHSMvdHF7nXh1cxGtdMsedigmpGPkM4KiQ",
  "key22": "4PK4iGPU1Txyw7RCHcsernWXSHvj5wAAhCp7kCffT2Q7FjwFjywNw3x8K8G7hVQfqLigxVZVPpWdp5qFqekEYS8i",
  "key23": "2QGoG1JadH1CZ1RHYA57MyMVawm3EXBJp6XSvWJ9M47p8Z46LBkgCXagb8GF2T922LM27iE4f7pTjjcLbZxCdqWK",
  "key24": "3me2pLutKnJr5B2A6KPM46LnogzkXbcPwX9LzdLSFgWfVSDiv6a3uCE5GDLbxehPeJuDShLnmtKyYevSectX7Yhw",
  "key25": "4yh2tBFsFYMiMLRRV4p1nvsa6hwPHyxXDSEFoCWsCWnvYeTfVZg1yg5VKexLNH6uxnGeoGKNmG2MRdxfEVzvFDiq",
  "key26": "3MywRi8nFkxKoPUcAtXBAtkuRWsnBzo9xMy2aMCUaBp1CHVdTQd7ASeKnkrKxHyzeK8DdBrswBApyLyHvowFzBbh",
  "key27": "2kak5XoWywa3gfjbbz4hjqj85vtMgznzGSWKC3qv6Qsz6vszpUywZdtQ2jqXbtQdsnQQXuDojHi277Vw4EKWzsri",
  "key28": "4bWe5Wxp6wReNu8RKFE4gnKGw5TdWpcomEEuf5CBuh3widUh4UNNFLV7wZaZ6fokMoWTsdjVoXkhV3bYhQmtjVm3",
  "key29": "5kwNeDz841huFCfRRRv2V43VnTFrdbBkwLkBgjrsSBxKTENLrdh9SgHioHwSy9x92JVX8dXviTB7XnPSMJwtJCnt",
  "key30": "5htERpEBHCS95mZTATmtkfJpAqYiZt8bozkcD6wPFZpxWmADrLbEHv9ZjiLeoJGvZGJJpWuTG8azTaEaWcNKpgoY",
  "key31": "5UQ6A5uT8BTzDuVjHAmxgmwxdA4xavj8pjK4K7pnSykNuHXYy8apBXkrcxWo8Qq2p1u7YG3rqcyZwZJr4X8xJajM",
  "key32": "238Lnz1UoNybu26dra9JBaX9mhpw15YBnEr3BiK27sFE5jAifeNayqA8aByfhXPwt958WAhsDsdkECc93ebcWqmF",
  "key33": "64GtANa46J3KhFVhJdYfzGRzt3DKRwtsLebRDbyAC2RaFPz7FcFWtLvkErJmkf3BdceJjd9ZBN6bbAt8tf5ayCYv",
  "key34": "58CoyNRm33ARhXfkTKepDQmkiLAZzJpLTEbRgTfhnzVRzkqhRgZRtYgqKnziNEUiSxYDDxDnWMrkavxpKPMKuoif",
  "key35": "5j1JEkFCbwZL5KzSBFSGnKUbykWg8F5P7hcqZ9iyRmdq3LutWJwRtpGoTTdFUhghsrcrAKBTFL73FNaHGW2G21nu",
  "key36": "3ppR6jTMn5sggfi2GXDjNyiexbhf8WWTjAQThN47CPAVJSUNE3n24tkrPJTaiyAGSj2dzf1QWsVvvgreoLVCEv5M",
  "key37": "5A5hGAZhLvaGZmd3gjk4A3z6p5i1Tz4zLYXZxJQ9m5zP2iZpEaxoHD7NvczmfXbaLcHoHuXDpjLu1QfwBfcG8tpN",
  "key38": "5aidQHqF99sMtzTBjdB7xfv22xRHVujVKHF5uNaCqGexVP7YnzpWgxrtJrMk6JGYBBUCNybFA4t1YEbEqdUxeYiv",
  "key39": "49zCKxeXdGZt5NSdg9YMz4SE8pSVMqmtt1dNVE4RsNJxXB42fF6rLMgkS9bCwZg3odPLhc4Xbw3JJnve69KiJrzw",
  "key40": "5Mn2HfbLAnaJbJ5zQFbbxskrxMAjmGzwC8HtkihredDGsCy5PjAnDRVFgewdGvweN7Rp4t8Uws2ZL4yK9GzxzJYg",
  "key41": "EiqEHKALgQggcVsFrFAEGiJSDFGjXnPBDHcnNtxRKTpzHeb8nBsG4BecopRk2NPszXPGtwenWmCq7LCvastJCtf"
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
