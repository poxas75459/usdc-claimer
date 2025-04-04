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
    "4VyK43EukJy9TiNiWrPkABXtqUm4gXFPKS2iGy99o2zpWNjpFwScqsDg7wARYSiVoWjdDFD7fyoUsfuWhGZ6AeGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h5AHxLcqmx32NKUsNF4ufuvfxbpkXFaumeibHWFMas6kDZJLetVZbYJM6y3vhTTB7zNLiDv5KWbWpFspydvCE2p",
  "key1": "8n8Eo2sZkxByZ6Zq1RkTMrC4NnEc2KXi6EXgjr7eokm2yb5FTLCrdvWqUpmEQB6zJyyeKxurAxka9kxc9LAnxFh",
  "key2": "TCkC4QvdVBeWNsQXbkEmxfGeZeQjbQRYzkgkRdsXHA6B5o4jap6TPAU9HJHuGwtkWQLgnhjgq19ehuqzC4HirHs",
  "key3": "Pu75b1HY3N8o2dvpJTCEGUnVSg7PQ7ALNLQ59tQXpW6jPjszbWkJ3Rc84WgZ92KvUp9BYEsg6Eqpa9ZMMCH8Umt",
  "key4": "2cYjHRXZBEsAmL27zVnoxx8Nif9rNZi6C9LKq6PVu8CA6BiKLMymsjUp5M7ZyKgjJrsBWdfvtDbHKbgAuwDF6SmT",
  "key5": "2Nv3U3VVxYfCaQMb5475gqF7yaRZeQ3qRmnjJTgqijGfdx7xizd6seWnj4xZmkopoNrk5rmXUdToiqyCaZurtEmu",
  "key6": "3o41qhZctMVBX6Hm6UMb6z54jcAAfN9iREXvHRgfgXwxSLsFQyvo1zYtj86yzrdf1aRucXnWo3AZ3mLpwiMtjE7",
  "key7": "4sYmRHrexC2uiQ61h1TdLBRrUDmSoG3hWTR821cEqPVkvjSWJiKqncHygQXJzvoZg2QKuvsVyRq838bBWMDmWAG2",
  "key8": "242abVFL9UXgTsE8TjysS4oaGoFJLAW9NZGVbUJnx2WqihJWGKkd6dCJ7dGnfgPkWz925gkuoCbqzuQhBXxuuSQF",
  "key9": "4iSphbZQRnNguXPVjpwpqkieM57QH3hcmHh5G1KA2sEGDZXZ58LENURGA755SHTheNvQ3gEUtriWdyFwgYkDQEGX",
  "key10": "3dxtjwXt7ZwAGEQ18Dz8rUf424CQxyKoo36FmZyyZNRfh18ruCrastbBvNNX2jYRj8KZvL37pkgxzZeKtk2vik7b",
  "key11": "3e7sU6ExPAv1APPa64U3arGjYj8iKwQruneKNyvWpuANVEM7uhG8RnbBUbBSzm1KkAvQvEJKvSXttMFDFa8LhHXz",
  "key12": "ahLAm91qCsfGSfbogvfKyiNCJP8CHfD9TaNDAsCt6gYaE27HsCCg74H3pxFiaeVXwXVk9JeUuxVtos3pzsbZFnp",
  "key13": "2zdWNaX6EEbugewBcYM2WxUh9oXJjFjmcqiUvTuXyksdoKLnZwrmdmakHes37VG9QXePjTx5TB6mWpSd6WH6jP3k",
  "key14": "Pj5RmzB1yKCEEsz5dt6fAvqHMmzxpJBkRv8SmcUMSzuRnSvmvCSSriypDqfKxV7nTtFJqfFcvSAPdHz7YHNCEeD",
  "key15": "4zc8SDPchxdDUCwY9dmixbcpZXz8WNxwnsJdVsUiVUgMKUap5991UBTbNPuHBZpMG36Mv5mdFvQ87C6XYCqxFZ2c",
  "key16": "3y7ZRk2KrgeJsSsEsCki9Ry12LuJ2tF2axW5UpBS7JLm4wSvGHHwM2Dbtquz4YjXdJ3my1py9793YxW1iU4w9XQv",
  "key17": "33cuTX69NYmwXediQqgKJknQWJ2xNWYXLsfLcKGPDFdFif7DWgqyLCcuE3M5bKR5uys6giaHfq7GfLAyq5qq1BAK",
  "key18": "2CdCU9QkvVv8vmhNYnrt3T7L2934mYor2a74FZh87dBnTsBqoJ8QDdwaok4DKiBALy46qRKe79M4RDNmdzWGUgvk",
  "key19": "3TK15ojAMqdUvn2F4HHiJQ3VxthEsgk1brqvmxcW2dpQu9jMydE1ZGyzRZQAb39g3LyRRrNGGRvQB8xNaquo4dnh",
  "key20": "4sRuA2y31bG3jgoKiouPeGac1mSnduHPoGd4asJNvnYgdBHU3QWTBG5iFuH4j3B6hsHJFymPfhqDWqCATe6AEECQ",
  "key21": "5YCZ9TpHkU2DTTWNdbKydCtUaArw5gJn6qQ6zudNYDCUrPTuxBW4b3jamvWWJ7bbMEDpH8B3amCboTXZVweXyVJG",
  "key22": "4kqMpujL4mNaBm36Vx6wghnPtaBSoaHZrRhNuL1eix77478pjERkjKnEyuNH6iRCgT2Lifi1rAJDSnWh6gkWYz6V",
  "key23": "3u9eBcS7trihaeZQpcc9pmDKXT89KR2SD5kNYDLdW9wezEtXj3EbpdpZGw53RFCaczw25w1kxsaj1TX2NRScbZZq",
  "key24": "3AvqU8vDq6VLaAG6L6yfuBXM12D5pBButs1dbFUBbpEqJNC8py36539MruY1qcn98YvKojY5pezX776zrfa3E8wi",
  "key25": "5ht4zgE5nPKve8JVkKLaDyUBwMyw5nPEVJbAhuYGTVHRG2UFxgrSPmKtFhKXVfzrYB2KhgHN4S6MpAQwb1KEkbhS",
  "key26": "3dgPQhb78t8S1VMoW75HxinH56hp9LiBHaNHwhLn6xR76As7KZYGKNQ3e3Sb5QC32EQmEqyrqHdGAjodsnDjZwJK",
  "key27": "66MjqPfZLr77LfDSi8fXcMNf9n1YNF82BQdo9ZoHuvq3aC5gj4h5R8LUobqXahbki9J13nfW3WHJAQDsuhMVnRLx",
  "key28": "3i8B6oaQU5xfLjz5tDBfr4bNC9q8FJ9zvruPHK6gXu6MTpR4VhnbpSvjK8pskdPXFo6T8GgvLJ2tYhZdkECZTDcQ",
  "key29": "4eCzDhizCxrUVhfmSXeCTdbhRJRXMLGiiq4u2PJrMHJqvdvXQHNFZ8MjceC38WNL77aNhyXT4CUM3rek4ju21nto",
  "key30": "43Sy7ttJZT9UMBVUNiAVF4m8gZHBPdJsKXoMtNLGbB5b9ihA3yAbz7bnninfL2CWyWNvhw1vPdoU9kQeztzKhj1F",
  "key31": "5sUJsP5ueVMJZU8ywDHVC1iADjB4f3PKFuMwLKVKimgZaGGfvCsTMi4aqURmMy6z42DXhAuLUNE666fZ8gvDyBwE",
  "key32": "2gnRAhniGM8zD4nb8kzNTe1QoWTTM6EHkSPYzAw6LGqEZkyJBjBb8TXV6nh626k9yfJy5dtER44waDzgo1TE3ufi",
  "key33": "2PFi959HpGxUJN6w4kTSyt6ukgfP2gyqhvmBGzNt6svGxxkiT3u96JQ4LFYthiemqCw6zdLdyyFQc7G2SEUbWdut",
  "key34": "4fb3xhKm4LhLV9aMnnfnr1o7d9BEazRfTtCE3NbhpgcpKYwCKqPa7xYrsLhcgUk7ECrHe94wJzbd8aYeyAfhViBk",
  "key35": "BEkvu7HFa7FsEZ8aKn8b8Qsxxq1vq2Tn7NUszafEXygWmLZrNa6MCCY8AxDW8FN5uqucELUeJUdgkBDYJtnVqQy"
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
