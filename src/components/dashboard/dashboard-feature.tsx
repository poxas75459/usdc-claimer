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
    "3kWFEHzSJsFZ1XbeNcNhEDbocCKwqKFFezJDpMEUw7nS6XVytjBxtiCLm9pyVaJXoVdp2L8kShY7GzUzG3kbQPCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNnRZyNizoKzGSnsbARqbFH2dVekX2B5vfifHkx27rHdCCFEKJxVBvpLF2KtjEt382NnxRHzdkQayrRCHMEkvxi",
  "key1": "2xsNaSukCu4aiBGgLLciJBuT9RRdRj3CNsk8Muzn1KHLaVkAyPJxSnjT7PLNs6fizqWSPHYcLgK2bs8iasgSQCbD",
  "key2": "ZViiaSnhf9TctBMS6EnpwDxYsEcasopwtseMSBQnLAKoBk5zjqqMr17ewmseC4dAVnCCGWM2gzDkYVdN63b9tRS",
  "key3": "oUBNY4Q9j1mmG3KeZo9EDpPDTV8M7VrMKHxDy1sfL7UE8MiCenpbnRTtsty5iuoQh1TkLLcGmrqru1Uzb2FTsoi",
  "key4": "2pncDXwaE4FKudQy6JANQHtad39WidjhhyZ67uvorjAqiEEnrkUAwF3bg95D4mayVSxREsFzsHL1CNWQM2VFo5Wi",
  "key5": "5hn4Qt7XKD4DaEaFhuD7X3W7wybb6NafexAJFbR3ew1aLpbyCEDnUw34PqgL3oeWTMTY1vgDomxeW8Aeccg1CLSL",
  "key6": "3v4MJ3vhB4UuTzGTuA3SBmUR5ZN5Xp5y1A4KqFdmZpHBBBrJb7JwscEvmtzDfNPR2fGZ5RNcRJhnkUDyvyq2WHH6",
  "key7": "5w7xwoqbLbxgM3ycWu4bS53yjttC2NUiXmhhwWD5sB8juUufuAqny9dvs1sm2Zsoc1E3yhtvv7ryrd41MxCjzYR9",
  "key8": "NxwypTxwTtsRS3hyKpfkWvZb3YdGTCvJAMkhARY69DreLauiCgiQKEU5T3JeBfP3K7qGM5X73LEWfBW5wPnzhqH",
  "key9": "2x1dvjif638HBhg6CVxR4CwYGjmPZqNVzcUfesaaReJghMVzocxgDHp1dGdQbQ7NQsv7W4zB1nkPLnY3r98i3qcM",
  "key10": "5ioazZzFc8h5tvjtXvPw2brARtNs12BFRHefuQ727mSn5ZiW41uK2Nmopbz4UjNG1SNERbaovfzsCjCdSA56Ag67",
  "key11": "4KNQCLNKdg1tkS4nihkdnKUT6iBw7PrFQHfx8zH7sACyN415PVvBQQ5n8vbb4qVrYwsFqUvDWkWmBNV7HsqXDYBn",
  "key12": "5uLnY75mJaHMqJ2nvyTqfJUtBCECLnPah6mMqGoR3X34G56DcSwp8JeWehtmgZvHPeXT8uk2P7us93LsCq7mAdDb",
  "key13": "39ujfme8gyFXHbAACgfaNNKoUjPrc8BWT1cL3pNovLtS9LxrunW4i7RUuotk5D8vQdGjFLw4zuVL4jDFSaPeVN1c",
  "key14": "4X9nQseaa375AUBARdspegThWNfNxpnHp1AWXLvDKjT9QAp4gdGXNfBeMeEKfMmUNaSxzNyJKPMLbBL72qAePsH",
  "key15": "2kKg9X77WRZGbRX9Joi1tzXHge9Pc7bQZsxfdMWzQkPXnegN5srUPtkkBArVPA7HBXG4ZjZ8y3CFJihD87NAJsT1",
  "key16": "5NiFXLqjbqpYf2ncVKHFSwLGL7hYJJ7yEbMAjLx6Xvrcib6Prwcqyie8WKwxBf4xmbM9LKD93QUvwLQt2tHs7mRc",
  "key17": "4zAZhX7uafY7wCvDUFMKqdTiAo1YYYMarEsM73YCRhq13Zmxt4SXzuYqkbHJMxM28ugCpyJs1LgMZgNeVqWPMmFw",
  "key18": "3oVz6YwGug4hGdn7YxcaYy73TjfuFhBCtUjE1yZFxcLTMjkobjp3ZVDTEKh15w6D78vLyNodJkDCa85xiqL3NYFQ",
  "key19": "52NJisALx2HiVR48LwJKZ6C19GajjwNqkBFMoEdSyP8GdSb4qQvswJwhebHmo5rXARE3qNEyd4M1q2XPC1vbv2ti",
  "key20": "TY7Fq4rTzAo3t8AW32XUfNtY7ARbitWUx1h2FtdXMTHzhTosS4WXnYBiTyLj4zVq3FfUnwNvHYXu3doGMXSTjF3",
  "key21": "55s4Et4Zrj4m9CPvtPH8UGMB4t9pMR3ZpafshWw9rS4VUT87QXX5X9YiRz1C2HXMdMAUbSSrKa9PpsXFUcMJR8LF",
  "key22": "wsD1Ht3jwh8vZ36LMdnUspMHGsDdtahmywqxeUTBQ2o9rxF2P5G1DbxwkBcU6uKNXxJ7yP9JyeqMJdQV8BLfF1C",
  "key23": "23FN4muLuQQBZUQwqxoVQDznGCvGXBJ2cNbNu7g5sQycUju58CtrCbvEmuEZJiy6y3cTDqQtHN783RYWU5u1SeiB",
  "key24": "2Q2avBzvQf4EPUgrrD9222Zcd7cDY4c7gYGCW7iA8QcZyaZB9cKxAeC6jNkCnbDgxPj466wKCZkqHmTpKzZZ4Ugy",
  "key25": "5fqhKyAZjyw1aTEk9zRYudhDhSL7khyX7HUFB8G97beqg3TLVdzE57ZPgAKMETxDQ7L3iiKSoJxPcL7EKomHRQkZ",
  "key26": "3ihjqmJZx7iu2QNL6XZzu6SPDrYqi3qoEDjxghdtCc3BPcyqaKQQJrtBNJwKwLVREV1gcrvhGgsLidwYkVe7KnEq",
  "key27": "4Q3oaiFsNRGwSiVoabYaftxESXCMjFvmxRKwDwiHprWcbWbov2Db2Vo9nkxmKNvUzXyatStNGZ1PycoGLa5Kf4kF",
  "key28": "5Yce77463uBVMyqsv5ak1U6pDV6f33MNPqS2FxhmSTgcFJFj8X7qA3fZb3KYcL8pKYgfV8zTe3xyZLKdYQQrNHFf",
  "key29": "3WzpkCP2ibBbJnAibhGyUQA49AFEQYeyZBg28vsbAwMYTThRE8J6ceDHg4itSufSEVjafeTMo1XdXbshtpcSxzDd",
  "key30": "4v4ENjsGfp9FM4yWMBn7MFJaSSNEDQ9vHoYvoNz4jmCSKJpfwyCFeGi2w5G2iEMnKxjQxvgqUCf9yviub5FTyKSF",
  "key31": "3zjz12LXg6QiiS14rGhw2JNLT8HjVvVH3PrBre3u8FVHpQQ4UbRf3s2HVR1eaa1Lr2ty3iJyQMGQFUeA6Hk8UwEn",
  "key32": "4ZBfNTMu6q3qEdQu4imSVK142F2c9ncrcadBhqZQAB34Uo7wtwQJuBnLFG4dNCj9BYFJezqurtHCyoaNkxRnT4Q3",
  "key33": "3yZiCt3j2H5znFN6Wz11cArAiZZbG9DPQJvcNaUT1unLP8FUB83E5Zy74H5A1BqzLJwM61vxFvRg4DC92SfRKRn2",
  "key34": "5r1Hweo5y7tGTALRNjkXUXqHTbZMarAhxn8K8x2hBKwGJLE1Qj4WSBVHuureNS14FH3w4AreQ4hBXe3YenRgisH1",
  "key35": "RHExEK76WZoLVNuyPcCxZUJjL2nXA45FAfj7QwygECF1KrasknHBERofKvga1EkGkksUT3y49ws93mekkRjzHgc"
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
