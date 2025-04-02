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
    "hw2vWhsKZtxhe4mbGx573ZVvL9EkoJA5chGjNfHND5Xf27WXcERQsBmFQq6N94ybvoPVk7C4rh8ZX95RaXvLeaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCB3CovPcRHpuN6t6TdmWYL7fDiZctc9JoLbHtYxWjt3pGzHp4o2nNMUmNGwP46TsxTMA7tbJB3EFY82yKZSEZ6",
  "key1": "546i7jNudawLacsyvxRGpvaU9UA1riSANSeHejjiuRPbHAVUfubGCoJ37dyT5pN22udneaUzfmZAkUfoWmN327rF",
  "key2": "AYigiW3xwzsi4FKt9Wyckcov9GZwxYgvAJSSV7KB75Ctk39pjawDtrfYk67N9xQGskY8bNahAyBpkp63qNXGPkS",
  "key3": "42MmucwvmrXyzQFqKeDWeiSradR7JSptQcBJ1cff8MmKq743cJ4XP25gmf5S2tTqdzZWQrcUBghL5K5jFp5jRj6F",
  "key4": "5sNWX2B5cMU3wt96d8wxQXKa6GtYE4epjoUo1AwTibXUNFx17d6jAmjoXS1eZsxkh9d5WmXLtxWZopqahoNG9E3n",
  "key5": "4MbK3PtjWp25nVRfcBJNp16wUQLyEXyHBYqQH1KVetxNreD1qkw7xak1FM1ZmPybWscsKcAkEYDmRrJ1nGERPzVg",
  "key6": "3nQZ6ZJXTVeVZWmSP18fEsxHxmgpodYkskxoCDHMc4GBGFe9qqjKMyJjSwEkhY4FYA4RkePcM4AVVQMF1gjSsDnF",
  "key7": "5Mnp556jMDMPcus1w6tAUx1gPwcTwEefKmPELBiBFuDnE52n6zsBCcbzJJ14KyQnBbxiw224z3wU6YHTQqmqV96n",
  "key8": "3D7PwjWkd1Gcsc73nBhttypTSVZdVu3wWUafv3BFjyyno5wKSmMcgfT8Bimb1SjE38DUyQBxfk5cSriUm3fPNECt",
  "key9": "49D7vVXMChFsLCt254DX4vAvBDKWLqnwQaGTzSg4m4geSgxzbN6Ydqc9rMqQJmQD4TkRY8zJnFyj17bntskXM3Zb",
  "key10": "4qzBpdf6RZc1gntue3fdqHDs8dX3WQSK5iq1bFyui4vDXHSJ5XL2q3KeTsFwG3QWwvrKgNZF4zeNpeZP9r161CVS",
  "key11": "4vQtchgMXcHUVRZpbnrzU4unVc2tVutQXPJ9nEkcJgipbxAeREXCnKALXvDNCgVuLgYgZRAczE6kUn9ZzzRWDYmA",
  "key12": "4auLKqrP5gV7cdcZ4AgGigUzefawEjF8PoTptpDJNNZtBGvtEEEQ1idZXMbyevB1BKd7qY8mG16HMdHg28m6qkP7",
  "key13": "4Mpo6FX37cRT8681yUmfXCggfGueRd5VU4Z8DrCaFbsePsuPyvkSu7TjbfFuSp3N7soBrSFAmWPJUiGcLwZzWo5Q",
  "key14": "TNSzsMERSymtiBkEHjns9kRPpcmndkYYSnySiPAGzEKDXivGJ9gWwEwdqXaFRLgVaBMhYrkV5TJHFsup7ByUGtj",
  "key15": "3akHKaU5NzdjqS7oGBuexWoWATSxEPfKf4X86isYMp2Vv5yWvvZYotf699sm2kmvXMaHAKEZSdewojp285xnTUcL",
  "key16": "4QzZsh8VFfkpShxNF3J5AkovdmZzT6ETMPh3DoS7ps6egoYDkzZvh7aKCLGzppwvVwe4nK96sRWMiNAfDTJ86GxD",
  "key17": "P68U8zezCVzy6nm1viEDBFHHDnR8YJ1kqVtyGzj8sU2GDG8XamYJ346bhkvWzdS6rv4tCp2d35Ej4HJ2JxCys7h",
  "key18": "4PLzQp2o879qhKXVkeuMbNFWgHXSKYTWhViRJjdrePD2brpvT8HfmYok6mPH6KCH9xJbN8h1STtPuhJ9p6gppbY2",
  "key19": "5FYQm7ipGbzJuZbq8oeRfadGJtEdzERyRRk4vG2fJVnC7CUnkZNqKHXBncEjZpcU1CYQFBtJJuoF1dNWtL3qdXsr",
  "key20": "3pza61TTun3foQVaWFL4FsN9H72gNGFMA3kNQnFy25Yn2XRxhkd7coX7uNAsGQpvimuEPXxuE7SjJYgCw2Hr3jjn",
  "key21": "4rDdPGfQ2SHNaKJveLwTsbve4bN3LnJMdGJ9jJq48pSA66FQn5Cqphn6xitLegWt4pgMJ6eufXLWLdLasXRSDAiA",
  "key22": "pmqBEDaCT4v8fdJH9vCtNsSpPdmhDBdZ6rNt96NQEpK8MXZc4b7uQ2xNNWnUV1mMX1CEfWWTWqf9sxXDvdgtrSA",
  "key23": "4Fgq3vHnR8rP3ZezwX6MMSyHjDPYXm5T6nv1DE64WYb4tiuTX6fMmW5H5RiPTnrWfr8LVo9JWgj8YGH1wi6mYBFU",
  "key24": "5Whkbq64zofsM6oxw7TfaxwhRzJtBYwMTzBN2QzRbcxiQr65KGGXuTW71oK9gGtwheAPHmeiYXZX4mE4dWDU9yVg",
  "key25": "3Eff9XkiotvCwZRrjFnF2tMa4Ye628LZutnVsPLvrKPvDcr6MT579daaSwrPbV4N85FWPCH5LWfd6PTaN1DLiQbG",
  "key26": "4MhTuEf4Mof9SWscWJCX1JLfWbeZFnbBb83Giv3uccXMgNpxh9ZoEiuXK9hP9eKyytucXMoubqkAriXnBwAzsrc2",
  "key27": "3VL2WaengTHXDcSe4FE7dDjCjGWVNpQU6NiMGKuE8JoawdWE5HaiLiZ43jHWTrzqXJDNsyinQ3KrqYSjKXCk8Mxy",
  "key28": "4TQRGE178bXL8D7o6deJU6DPvJ6n7WbhSguYFqEmrsWmrHT8B5guN24TpiPGBLfToZ7XFp4tzjrDStegapJXAUnr",
  "key29": "4VCKvRqserTawXeJiuRj4UUzhuy89JMcXA8N6UF2kQGMdbz2gLqwtn8hF83UtuJQ58e9f1QwKHAMvDoqUJp7v7T6",
  "key30": "2J2FJqkAtr52P9p62o9Nv9hw3qX9dGCkMJ2UNMxNUha1xCxMYCPHLT8S7PJojRaJjYdpi2ngayhpFWvYyQ2VisPf",
  "key31": "3yP42pm2pmkFBUQXpoX36LjkboXa3or8WyC8ap8Pz21mMq8ELJAgZckbVDNHbPtEAs8abF1pReJVf51Cmq42fRsv",
  "key32": "4KxN1sJvyAsivevuLrZFckKhZf75atfPnCmf2ouoBUeh1oUQaSwvSzqhY8YFFKqrvNFckwushJBkP28VmUrfXmGk"
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
