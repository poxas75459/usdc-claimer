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
    "53dvp12SvyukNM2Wq7exqjqjeRHfTenb9oPpBnQ8c3wAG6mxzZnF9fJmXaUT1PEhB3zbV5MGTERSmXesrQVPhdkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rjE7JiMKJcE9EWr6s8ggwsEb7H1WXxE6NGGArv6Tx9nCBKw16mqHZT6pR99YizwUf8RiDEY2x8pSzYMjvvSq9wP",
  "key1": "TndQ9kAtyscYe3gMknKGNPZfjvP7uVFxeRErBSjfdm8Cg4njk81MscF8XnhBk3sSpp7UXXHDZUydFEJS5q6ukfr",
  "key2": "5GVURyZHgvRdDiiBnoredEc5HvPeVh6t4g8pyteoHnxf8NzdES1QZcZQwx1USTQdCDRCWoNgfG3rdnCghdQi3ig3",
  "key3": "Pn2iqTp3jpsGq2DWnEGMZ9DyogpoqAAg36vrYTKYA7umagNJf8rvHShbopMqF4hafbthUyrE8VSTryaNdSoQB9T",
  "key4": "3QVn4imLv6uiksfdXJHe3v39bJ3wimbQPVEdTnJgYXSfo4Z81pTJ6NaBEjTCQna3AUrevx5UiQGnUps41JqXcocA",
  "key5": "4GYo4Pzb4ThTWcoZJAYyR728XgAGvSAtpDmPpoDrzswjWDJAmmLsZ3ibyTfq1QgEaaLcuHUQhNLBCfy6ybhet1gU",
  "key6": "4W5KHtKums98YGx39B4MjN9oLtQuQ7KadxKDUm78bVcxfmCABc1uY81AmkAQ6xsfZGwabxGd44cDKi2z4mrpy5as",
  "key7": "fXbC7LeUZ1vpbF9reGeXLJYJnWoyU7RP6UFvWaGHU6sZ8nJ5bprXi8YjiXNr4AinV7x1wEbioxehA5tgZBgvnFi",
  "key8": "VL8dKcyXvsrziqUoNPGy1eQfsm4FwUtJSNCQv7cN7mitnfvALDucEajiKASHQh2K1Zx9eg1ovruNX7eLix6kVA7",
  "key9": "3Wmruu7gPDobgSM6sK7HL9M2aZrKHeePH6jKRFhJxuNv1KwkvycMa5FxZP774N8WJarenMM7SpeMSU6iAxVM387U",
  "key10": "3LL55UkWD9tMf1Ca7KomEuLDzc4NGCDZixTSThDtL6zkYTsNtL9zBUGwpv5aCkgZwqDHJX2d6f9ayFnzrDpfESFw",
  "key11": "2ag4ZTcdLtdoeyJ3BE195LDWSpvfhG5sphpf46fpHHAjCcD8fqHKc61KnqGPWoVBggizQtxLje1eE4ryaYbaPbRn",
  "key12": "5guTtfyJfYvUWpdPczDcMuE73gnr4RKAUdxCcRSm5NUZzxXe8pjNsBEAN9BGUdG8g7tL4eWg3WTd57GoLnKTUqAp",
  "key13": "3hG6CQTKnoon9XkAu9CvsjAdPBWwfzaFCwiFYxBZUoDniMRkRVkYJcxwDpyP9eemdn4ZW9V4nhYyAKx2xiiAqC4U",
  "key14": "RyvMx5Ks5EGiAnKQxDukVtNtQasTmKV8LwhDFebpmKLGHKrMbun4tkQDC64rNaBG5U8J2XBs7QQsZ646hXK7ZZ6",
  "key15": "1zkAY8LqzyNqBwkbbqVTs3grBJAyWgMFUY7gJxcLE4Uonw5KAPn9XSWQEYE4ggtTauNQQPSAvZqnAiwJvK8gWV5",
  "key16": "3oKFwpqCB8azHvfyoPmPPjWd3kDuxN146FH7WVVMJGxh3ZWXKecHqFQMaTkBXiT2VGANL3on4Eb6YtgFdZJ6kkkS",
  "key17": "qqHjM5qGY5ijqnKJjhGddGLF6bMeQFVsVm4KDCDeWwDQHefcQSdyatt6vdQxUGQufzbcfngjckezwCpynJxtBhc",
  "key18": "4eXeKmHLrxdBz2v24Y7AZCjosBvJ1vzaQ2HasL4v514WrVP1xEPbkTni3MFLPfXxjuJePpe4gXFis7rz93miFPA6",
  "key19": "43RBXSun4Nn1KogTBMxAt6RaCFhUFDWVHmBN2gd8duyzfr6Smb319J6h47JyYVo1JYFDqPNNEspUFqA7328rb6Yx",
  "key20": "41zXe4EhSMoZf2SoB3mHpz2QP67ddQWbJ9mjkqiPa6x1kL5yQnmiZSmZ1yyiKFhwnRqieuHBaJsSLoQjhbFnJboy",
  "key21": "4edHW2DdkgjYJPy9d71BqxiSMDruUAc7YHsdyhnFnsG5eNN6VHzkHD4Wqx8Dm2oMVT87iDC3S37ZSTC2DxUrGY7q",
  "key22": "5rxvuPzryb4xepfqteFtcT6oyTVL2zNs4Ryv1T1DCa7s3HuAnoo6M572djby1LJ1sY1r1Z5uNWFdEK7WYq5QGASN",
  "key23": "5DbwQCoFS2eLLqr1enTrwNcZRhx4LN9secmnRJkjoRiHK4ftBXqhrXgF1xT9WcMaGmwkcm3UMAQ8iRhwjDZnj112",
  "key24": "gGTre7BBYTCUUAEQnjiVscL2geaRUnsRKyoytZQtPvjYEJm9aJjB2ijiYnqk3PsELttDAiVEAjvbB52yKnDUMNs",
  "key25": "56oLjgUoxTX72V3hFug1sb1TtxfgLUppYYtZNbbAguk2Kf6k7Wz7af5HAQpadLo7mRBTGKWiECpyxMKT7rjzE7sV",
  "key26": "4J1Du633QYqfmQysCRCCLoGcf9kUj9FXiLSnYxzqxDhyBbDriYvLXYnNLc2zGainRwYYepbA68e6e9YYoXBNkQt7",
  "key27": "26vMbEcaNk5xLQzWuw5j7A6uRNHRPNsTZ9HKEusQafYiaJtqdQeC6EdhCws47e8HT8QSxtKZ8r2hZZhNidUkYzVw",
  "key28": "3MjkoE7Jtg1H4rQcUHE2Z74LGc7MaUhWxsZm7Ps4eJkkPWgcxuXRk4gkYB9Z4A2Kc2cnjLJGod2tEgcVv5QubJe3",
  "key29": "2hdVnfy4efSP3FzNrPjSesa47fwt1tiMTxqN5RxGxeVSDjSA5ntgpUPMqaPzEGp3a1jjFN7dH77u7vbfjHQkHzg",
  "key30": "5LonoAHeEGVcZdW1mMprfYpzqW3G5oSG8eka2TA5DZcD14ahEZA257qD7eNcKtDA3ZnTMCneMLXYwhNcUwhw7gMf",
  "key31": "4Y9n4oeiE32Yh1g9owzJuCeq5aKYwRvnAStRij9RUQ6d1GmEN8A46P4dB9nQFRyftmGxRyC1yWrbVZejxQJU71hM",
  "key32": "64pQwSPNSZqrGaYiBn4Shy9KZ2zS9KD9Z8NPkvKqBKeGiqB2tmXQumsoA1YwEaA5MJkSRVcE8mWWtrEmfdEcGstB",
  "key33": "3HdmYA6NoGfENgFJ6Be6sagMFBVjQUE4mU2oBvNCMbFaCKSUhkUeXjscY7ZR5GAbDnuF1adw64j4KWJdH9CZADr8",
  "key34": "4hLj9avAVUui1o5ebKHxq2oK9Pgumj7FxLiwrQKLhC2tgE13gEe4sYybtb4z6rT7gw8MyYEa15FTFnPyNw8eLv4T",
  "key35": "4MX3izKUaHr21Msf1d8a3cA8uX4H51FrPaQwrB2nYgdPfAavQYqMwKYRAFbmucPV817Czm9AYgAQN7cWLQMgW8y9",
  "key36": "36ybxfP9y6U4kWiS2W6crjyMGDheYWY7oiefaXUMPESZ3BnNztMtGe2aJktXJKguVWfQbGNSeeGiM4wJGgqgZtLZ",
  "key37": "b5wjZwyEBoZjVYREL21KYwEwEDkdHiL69NCyppMZdQJGCJeQvcfoJmAVzUqghRNP4e2BgVbWPTJDmhKvKq1zcbt",
  "key38": "3rAzBK1anFemEZEo6U7BinLNoXMEJa4CmgcBNvPfzFxvxve6uKQG1LVcUY6DmYCGW4QdmbUxMoJoEWMm8mQWzWGM",
  "key39": "2oSB8ytTJcWiiX1iXR8P6Lnfn7aBvcvyksMNENTBjSvHyRErGJZji9US7KLwNH19tx1hfZqM6xyVzmohdnvrgGhA",
  "key40": "1WNbbqqakwKjzbPR2Uaz2UjEtwrQMypWa8M8phLviiUVvQt16DNWG6wx5N1hUp2pMcZ3djzZJBBXhyGdv4zquTY",
  "key41": "5pvDT37w4z83VMZmCKpkUmJvecaLmqjB9PqQmvgvwTLZjo2y74v7FCRSDVJZ3NfiDW9XnaAg7Q9JAXs5Gq5frjo4",
  "key42": "5Y7y8AM7e3z31X54zbgBnMnLBaaNXKmM77UTyuBG2LFr5c7aPsVFmEEGyMRtLiy1VWc94EMA29bhUtHAPgkSNinm",
  "key43": "LDrfzZ1gaHMc2yD9LBrFPVEeLkL8haAGPMtRBXbwHXZY1kmiFHV6ZTiiY7c6GpfyG9auhm6fxyKzRK1rCMy3fme",
  "key44": "Mr3aqiS7XRsbjZJHTzFv5e26K13ee8FSMW5a678Ngk9p3qd8sLfakvxCwkdtkfbokPwKqCVzwuvpQKnqDRCmLYo",
  "key45": "2LnWLvCSvW9nyuA5Q9NUAXYZ7V9Z4Xpg35dJeubEMxaXKtHiEsRN9HSMiFebh47GDt7FT2aLAy17zLUYvWy822dr",
  "key46": "3Cnw6acP5cbNuTnEXwVfUwwbmJ2V3sWkyw8DnRsubjSFWDsVfezvWQFu3sEH4wuCoRvgkSqJi5ZbJpTn5fvLFau3",
  "key47": "48kJvgMM7yr1bBmqykK5zvNrcdC74TMSRaW8aeRfzDvidJVKSBAgL36DADzWnXSxa9WpJc2Hakw8nvXhLwaM4gWW",
  "key48": "5wtbKBi92bGuokMPBCFmibbF7TAb1BEJwXEpDoz8CorYLJKHyfMMjex7cjoMyKuYveFX6ZZiMewCGsgwjXMxrvqu"
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
