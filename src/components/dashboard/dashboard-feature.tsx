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
    "57xfd121RZkgLRLSuaMQQkoctyJTaPCJNWYqCZnfvvD7aUa4Qj7fXboa54zAqBwHdgvQEgdkXpuAEifQ79AGYvU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTSsRrARVj4uAiGVVQPr6wWP14ehNqBg6JFaWi3joGpZkm22Sq2XyYBpxiQMz5AsjWRexMxQA4rY3SwFiie3GBF",
  "key1": "2QTnYSC7bUGLUx9PVY599x2EJaisK536GTDyDGhUsy4YGf2DxreaZKBi15xfP5scoZKVZQBo6ErEr5bDrj9EjMR2",
  "key2": "51ouhzhFzVU1Zg64Ebp57m7bUXKhoHUDWsXHdSnBv9shHVFdQXEKAx7oergHJA7ZHx9kcF5zt8Kenn9G9YB2vGMV",
  "key3": "2KEcMYtbcrCXvuxxd57YPGLWpzvdeeYkpcBxNDyaUxaKqurSYcUaeR61aYsjjP6Q7TAb5ac5xJr5BTw3dgF1oDez",
  "key4": "LJRXY7s7ayqp68xcsD43TvHWKMab79N16pQetaYgX1uKtibKgey5V6FXKZ17yaD8qiLY1VWpYZMCP6Ky9Dswxcq",
  "key5": "4ygUmoRmaEcvN3s9VRs5FcM1yrKdaiN3WbQY92kLkzF3xB9aAgCsVLWHCsfPL9aVuiLV6bN5BE7sdppeGADSYsDu",
  "key6": "4i5bYhMfewkbJYYjoWbnuqxX7HX1wc2viy5szXL1sjYLZdXGNPYDLWNQVHpvAAsm7JShNshJFLSHpMFRPiRBcu8e",
  "key7": "2YdCmjfyS3dCPqq52eZdFXUthpd3kYYzCTL8mdWuRWVLPVYdCr8T3f7cEJieWWaQETK3KerPvqfcpEokQdXV8Zz2",
  "key8": "He6xF9k1jnLVmMoTS7LA7KrvetKX5nCgDLkM9xko1k3xnCxc7CravtAJYsJUiUqry6TiFr8bQHvjAKe3qgtsVaE",
  "key9": "5kP1A39or24ZfUQkvp3UFuWqvLMVtDa97uZVjZwm8PdJJ5mFhWUa1pjLwag2svpdAJuuA3A9oKayv8iTE1TdJzEz",
  "key10": "2BwMqMhxJAf3y77UKuh6DH8AuGqNCRkCWc8tLZimcBZkiqKS9VaAFMGTBioa17QYBWdWiQymmfr3TLDAvNxDYoPM",
  "key11": "4PvLvyuNe6GXv4bK2FhGUTvZ7ZL1vuF9y2nj6MiCVguS6TGvqj5GDL16tast7UWg3FiFp5EN5Wd9EimvM7w65Bqw",
  "key12": "5uTPvWwTAWxMDGENH4V2FJqrzg4hfmzqqocAeiWLJVLVmKvXz5SxZ3Tjfq5tksm9u7L7Unh51FFKYZHQVgmEBbu1",
  "key13": "37KinzZXwERWgYtfoX21eJduQYy37eYu9a2WY6GUL63jS775BJTUmocWSjDgWJU9sGzYafNqxSfmxCt4ZK15GS9F",
  "key14": "5WaFdrp49kGwHYjUhdmLgfdnbBJ1UH9P7pt1r1KzusLRuntpHSJGJQXpF4CBnMwcJJKj3a6ZzfxsfJjNh2H18ELw",
  "key15": "4SPWM5SXjYC2x5kapoMJdqN1x5T66ru496Zg297ZvdW1D62UnHShJK3UZsEUwm1dpZbnzPSmD4b6nms7PkEJnsQM",
  "key16": "4UzLZJkWGdGt5gTETSGy8UQ1J7gH7XFwR5VKbKDdsvv3j9FmGA21cHgtBVV3d3SDqu9VTY9m1czw8avZYWnqmiH4",
  "key17": "2MKzQmi8tDkKa2dhupSvb2WaCsvwWyRKPWN1p9fuCvnhStgNgzTVpfeoVJ1PkYy77oHs5aMj4fCfUYyYWieCUKPA",
  "key18": "4xWZ8UxcVzBvQ69drJ6ZNaDXRFgYkJHQq8SdpkVXFJa2KH3RfTpLaPKs8ZjicVEM8ue6nTModYUZFhApQXvtq9mc",
  "key19": "4buM9TR5fcsKh24vMPJf65fCUYkNxd6A1LcqWQhDajrNzvL5LHWZwQvJQogcDSYPmT4PBMF5RLCbKb4RKgekznWX",
  "key20": "3wgCjSZNxYNuZrJgL6LNeJXmTF8EH5NSmSFi9QUBWG4pDbNVuTZ5k3j6BEzjt867b1BQGWs9t8tk4RhJjtotFPP1",
  "key21": "4PXDs4o33iLpaWeQQrcdn7WfA23FzsaEtPG1GRb6G3BKoAE196uSihoo3y1Qw24xScW4onFZUdmUhr5fki9g5R52",
  "key22": "4b7S27ZHUAFC8acTtYML8fRUGw6SH2RcnXZkAaKSfTr5NiS5D2HsoGBSPGZKNWx3nAjMaq6U8g4MTxsg31r4C6vG",
  "key23": "2gSfmf5fAkDCEoaanwpBBaarzw4Ky8GQbaBAzu7G3PPkdjJJcnXDkECaVpHZa8UgQjbABM6ptnuRst2iVZKfXSzM",
  "key24": "4TAvKUj69BGyJa82JYm9ByLZGbGzvuywsGmTswwvjg6G3ZHXTRmgHNhn2TMjdRD1mcpc34CQyYrpodNB3EQhqzKz",
  "key25": "n1RaSS6Z4y5VbkTQPYG935Ue3Zwr2QSRXeAjAPqgWGUiVunKVCYAeSj8gt3TijPGwVzHKeRmWZ1yTjWoiVNFirQ",
  "key26": "Egyp3gnpM2xNJV5UQftrJxVTkN1i9hpGqZ4Gkt8yVgDzP11rWju8LMddwZqPBMe3b4UiF4GEz7fBaUHtudnRruw",
  "key27": "2vyHQQMzzf9eS76yMZBJoqZhz2eXUrNWZAtxkMj113NrvxzkhdiQtGD7ij45UvCCn8orm4gpydUucygj8Hr22S9c",
  "key28": "5h5FoauujZnbToQQEp6TeqG1p98qzFsjPPqFA78DccHsjpUAWJ953xLkUxZCWfTGB28Z7LwWnT5EZFnLBLDuaqiG",
  "key29": "2kUy2vtUwBNzfmnibr4R4ZrFPjd9fshwpwVSoMJjBjHjbx13wCFiH753sDgrFdJJ8pYpvnt9bA7JuA65otRaMkeg",
  "key30": "4UyX8zXq5PkeXEM1rk2cfS6oEeFPTntQ4zzLP1xbJ55XpCgosnx49avTq6h3r1UKzApToqfYzQ4ijMm9wGMS8wmS",
  "key31": "2DSNfNYt3WSjzyPXVJYyR2CpqwhUQ7c28sMpkUvgFbkAYLsrBRKkK8qnWkYQ3Q3kBToN7Q3QycpDQkiTiNFEuHtX",
  "key32": "2AuNvjNzAHbXynPAtR2YvDiw9opeukuKfhkeAVEawxrhCzrCRveBBCTvVVPmPutgU8qeimX5Nrot8RVGcQMT7Ptx",
  "key33": "5DKEbD2RkawrMG5LLaqezakmq84qctXLffgzDCugpR1Up4ZHGvHtspFUo4jGbnvEjoq4cobqmTGwMMWDArWKePfi",
  "key34": "5pgTRrvBRKq6mf2jaaaxn9wxryJ7dq83216GJqeDcPZyhJg1seveFsLqE8VcdWjqzhzDnw1rnjXUHSvYT6BExUVm",
  "key35": "34SBfcj3Cr3Fxx1sreJ3FTgvbdkBwSCdMparPikPzh1jstetoHybF7ujpYxjPkipsbBX4BDJ9jB4AyKL1xEtepdy",
  "key36": "xRk2zVNu4dEJvnBk9tjqpsYnpeN8Jvvg4ZW2F9xQkBMkdCBmzb6E7UYaC9YDCVwoGHaWiWJKgTgToLWNF3uPEo7",
  "key37": "6SV4SSiAcn8HEWT6qDAWuV1bvuXLA6NUbot3sheRoov69yPCfhHPuXChWMCz6D8Z6EgnZJXtzoTtXSFSzLgtMRp",
  "key38": "2uhgsByfHFfcDGKBQXB4GeqjeVucu71zNy631Y6Yo856RYbzVcEWqbzKKzWH8b6HPzqfZrNWLUrpDcxS2kosLDD4",
  "key39": "3fNooNn3zBotEbXNyBv9cR4hNVz97xRpQMMn6H3h7xCwnJGrR9yXyUN7dLZqkBf6vVYbnbL8eLXU72ycXJHiZ52J",
  "key40": "2VRMtdV1qd6ckW51EWLrYAQ2oed9ppAM9UdictNfZ8ntJjV2tzp8eCf7NgUADoHAjoefLzmoYgYTmhmxQ7V6pqBh",
  "key41": "2U7P8iE2C19ZnrVNhaEVUagFMTcBNXeeYguTMZsheuShK4CeVoeg25n7PU3tbvNxd5KBVgnrDCvZEkTQueKZrSoX",
  "key42": "5augPFTM23dN8ZXzBUNxqpti3xw4fcwq3qucVwUbxZA3aejDSBtBYCyxdbkHDfYYK4KE4UMuXkH31bSoswq9b9fz",
  "key43": "5vobv4aFndgeFbuH19PVQAR8csjhQshmNyMxx7K8VQZZNLgkLdtfdpXNdhLgrhM8pWiGpcmnH8KkkJHe3yq1fZsC",
  "key44": "ooXgwT94ni5acnCkniDasdzqQXgdB4bmgwo3oAw4TwQ291u1Z6GrCshb1o6Y58jt2Yxd48KAfJh4mFAyGJTVQe1"
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
