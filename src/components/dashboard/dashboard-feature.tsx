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
    "541tSLVxuayhf9mt3zPsmQe8yin2BJxVSRupShc2gZeo1x6wxzJrwmngc8z7HPUvRV3atyss86zwFrGVHrbPnVrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPNbjBtuT1mC2TiGUuqHX5DFEJ636X8DArjciWedx7C3mPjRsFbYNjfpTDc6ZVtxSJfKdUmGgD1oTcjHJ8JJ6H8",
  "key1": "5vGmuMb5aJnQeiPzSZ9a2DiCi6TKadXzDafidX1pV5K9nPYKdEnhKW4Ly2uUqV56DC4m2EHRnFLhb2VHmHjq8Zpx",
  "key2": "2CqoLH3GF42es4FB8KLwJn8b3TFUQNZisd3yD6kP1FitnCpFPsQyYuxMujJCn2WKhKwG7V6qfdSVbnU7RpfVpKXB",
  "key3": "iBi3mJoSuuC7EEN6rssZN1oT93TxkwamXTJutKZGWhzRh65oH5XXqf4H43Zkgr4gsyPCEvqwUVNLqdXdQGgE2Pk",
  "key4": "4Xi1wiFdqQjtKrf2uaxFU7rPuCvU6kyfbFLVnBhKkLJrpkvmtWW3VRKU6EtmLMTa2bYwr4fdAaGRk1CJXkKkiW2Y",
  "key5": "3EAaipvihPFUgDjy4z4CPN4okswBqcTf5jKPxfPZEWn8PHynJh5qkU7vai5XS1vm2AbuqmLULFYjJbDJvXXQkULS",
  "key6": "4SsVtR8Pvehw5qHK3WXffseis3W8wMWzqdVwzZRr1fEJbUz5fL5z7cn9DxkvxGHxqLSKuJw9Si5z6dYNkVdqFXys",
  "key7": "3VHrHs9MFHTgUDj7UGng5ctUd9SbXjiksgkrPoecm9ET3JRZSQVuwKsCYsg8CBJGQU4UHd3f9mRGf5ekRb1ATQVZ",
  "key8": "3qFBN3VrSGeNutPnRASp9JiR39hzqTy9qBTtSbaazagoMmdEheHGxQEaYEr7JVL3jDJ62MpTbdQ3nzyBfyNUNAAE",
  "key9": "62zy1wDTp7i3g39tKS5EnpyoAUcJAUZf7GMpn5GHZjuajCvSb8u84FCCTASQZgL36N67TbcXV71qEKiHr1LU2VVb",
  "key10": "5RQmd7nFiESN2EuagWDHbGPtLSrUPY4Y98qW381oeENbmEVHUjgdffHNXbG1jpzQVN6eeoGusrY7wDgZQ3vxCuD",
  "key11": "2HRJ7FxB62Na3857QnBN2sThrfn9yoSshY7RrF2go9jy1Yycf7XkR1ae6kQC2pdBeo4PBtsokRTAzxvoUxEKr6KV",
  "key12": "2g3TLrZSb3GCyWnko3GyEFuvTWqoyqfSNN6gYAehsu8J7EyVDj1Pxgvf86cartAS6TkZ7PrKN5YFpiULTH7nkTVb",
  "key13": "5iELcFW8bz2mvpRWnRuxMRYDKakjAmDL8CpyC9PV7GdVsTh6J6dNS2ptQdUbaejhAZvx8Y2CyqSY1NHy1u7A1dR1",
  "key14": "3422EDgsL2p6Mv7Vpx7RUHmc1E9AQz5BBqKxmN6e6um56xhWC9aYtkYBuiTYACMYpTf8UJiwnSizZU9jEFVFpoGB",
  "key15": "4ccrY5491trTaDBgDZvuvnNMNtD1gecswtLJ8VThYv9Lni76k6zj9GrAYvsuaZGwWJcZXAHZCsvZLZDhHPr5ZTJX",
  "key16": "48JU2wetd7WoxpsKGjukUwfqmUV4npwioXru2iokmnVP4cUSe2SiiBnXhWGHBvf6oJws3PJjNizjBDbxcx4hw9mx",
  "key17": "5qJpbx4XAo9GLFzkDsFcK4Rb2t7AP1zuACn2k1qpTEsSwthkACD454d22SEt7qUxoAZ1tYogodd5tda3bkvpPsVH",
  "key18": "4i3k1B8fSTnovzSfoSRB1n2iv1NvQJFcUr75guCFLfXXUypdswnUYZR6bDc1uSvuAA5ueJj2mYeKGsZvY6EJGq2a",
  "key19": "3AChPqHLivdePPCqy4moJiAXweSwy7UH5iJFXJASvWZSp1QUQosCVSJqDENe7JuzDk5C2HGJVEQezb9e98XLuJS5",
  "key20": "2WBCM5m5t3HDof7R47r2be1DFEtdyCHS2PND8j5c8fgPk3sSuiWtDD3eAzhBGmeEop12GURUYqgyttMVxjSHEjzD",
  "key21": "2sq2EYiKvJRm7wweAmM5x31uqbMGMc6jz4v4LjY657m25upETWCxgU25yEKnake6TG6AK9suAYm935jy7k8N95E8",
  "key22": "38T9RjP8kdpNmKTjnWXCMZwi75HcHF8KkoFd8rfJDC5KT6Z1iZCguLxXx2yxnHURBgPT3Wk57NVtfwvd52cKXjBn",
  "key23": "5Kjq2UULvjj5fq7qjgmiWWCunbWBwgdookVvyXQ8uWAQUQ9teFKQVDXJPA4i7tesEnPcYx6oyuuPx3VYpceVf7wK",
  "key24": "48zrsZF1XGhde2bPtDrWg1pFZPC74W7KYBwFWmNSFUrzFHPdSdHv6DsWQhs7mcB3VvgCfwr75hGrU8vRyGygprCQ",
  "key25": "RriGRY8iNuqSRJsBA4uaFjCPyhDYJ7uPbxvKX3fTgKQTJro2A32wY5udVVBCQxFfbkHHcXzsHFizzmBuSwr8T5a",
  "key26": "22ieQodTxC5aWQAcZ8JNiNNAGiCGQvqe9V28YRkNjpTWGsY5K5UpD1bjKTQVDGgZp5tE18VUJ1x2fE7p2MGcXsNS",
  "key27": "DkPDa1G4QZupmU9UGM7X11rqkFcsPZxPix8ktmUrRVgKrR9CFUSqBt7cZ7aVDvBBaEg546uTKoGhhw3Mv8GW6ge",
  "key28": "35wvJMPikmozo4EqfJKzA2Xq7SqDrJZkhxkWbiYU4Bf2y3AjJ13jzAG39mbbK9acKLFqUYjf7WX8Q7rbiq58u9Mx",
  "key29": "5vGrFymZrFbZD9bEXmzrJy1TTz3XK7KyQwUsuPkeBFireBaMa2K6kVqRsgckfxiSkrmPfMo8b5gi9dnLbUsGAxWT",
  "key30": "4myaCxRW1KtyaXWE2dB5yUDJ8WN1bGc9hM6cU2gDydhxpVvX47BVUCNj9NKVybUVJqVGEySqgZLDRMrRpb6rtbh1",
  "key31": "7bY4bNkquBJUuGifT1AvBV6zthcAQq6ZrvHCKp13yTqgp6k41vfHh43uAGVWvMwR7tECiY6ThVjKKibc8K1MeXV",
  "key32": "3VQVQsWZfF2h5VZxEhpDu8YTyK4sd1jzR8pwWs2Qhhdns9rSpt1YtsBbkvLy84Xz5aoRKW3rmLuJ7F49b17Ys9D7",
  "key33": "3Jqwbv22dESzp3iJWDM7u6QEVpQK3uMRHzoJjrifzDhJMN63p4VTRfvR2gWAS8ssfaCBRbwWPAkJbrYanaQRAtYP",
  "key34": "4JPtAiMXTyEZnwqCU5KoM7N83mbqA7oMHqkMncCphuJZUx2MXDdpTanTw2tgGyZMr8tnUXGTM4wYXm8fLAoVkttC"
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
