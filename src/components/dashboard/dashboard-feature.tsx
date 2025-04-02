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
    "52HCYCoLJrY68binfXdHYeN9LgNxrApC5r9xwmAe8gTB3SGGzpBd54TgKWF3xTZ4ZcGieZyz5UVjCQKWrgix5VTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhNXSLJrdEFaXeEeddkucSDt3rDeTCdLdhXnKe54PuXoxg3cz22fv13TYZYcvpgBemVk1K4B3Ve5oiz2PZ2rfGx",
  "key1": "34WxEtakBWGHohDps5WTkrMChywdBB6D9yExnC2kxMMmLBLbg99iaYcWjWoLWu1VRUCC7J3nj6NULayhFRjjU2WY",
  "key2": "48RwbqRpknRJ6X6ueMtTDeUxapKeoG6Dz66o4EUTR15iPSEizgtfgzFJ1GRa6f9ZkhYYwRTXdxNyWcmvf1VhAN9g",
  "key3": "3Sq5XnvxnfyoyMoQGeJc24F1ic2nx5co7MuqkNcH67VGVEvof8GHEu53821jnSUdMUnMHEDCY7VHfY94fcBTmjYh",
  "key4": "43SuXLQn9JpTPWMN8uaTnMwtr2drRN6WurCeRQCFpUPML7BseYbfZWwppAqCZwHLvQWpk8Fb6KVEqCpfN4VPCrDf",
  "key5": "HX67ArWeEcBnKYk3ybSPrPFvteCzjqmwi11MiZfgHdDMYdoyy2GUjwLHPyjHPGRq9NEJaFqCbuhK6hvgNcaiWtG",
  "key6": "23gKVR2JdXWMedYVTtdeWe4cHECbTfxht27w5WfwjHUf1uvqSEEKqnGb4miHynWnTo1HSVsTGx4GiAffGUgVos6W",
  "key7": "4XFMfxTKWciiJ5bA3w4CgpxbuCN8apPLHTsxQ7KrTEpxWtc7TBk8NCKcsLLbNX4JjWAVGMwnZjzYLxzRrDYP2VMm",
  "key8": "4vizrMogzLNQ6E9jkRFArHHvbUWHvbk4UTNpnM7FzHbje6MXxbEe8EZb6txHwXgCDAuXEW5xMMbAtPJgP5b1m8Ur",
  "key9": "xcUAzHQ5pBPLBfP8nf6aKBcEgCLthNs1UviQ2wAWyp1GmbL5Tp9bMMsnHc1T7xxgHrxw8JUua5HwrLJekJE2vna",
  "key10": "49Zysg34Fw1JyP9WLU6btdm4xJPVthQjZEgHoGifpZUf9bKhbBWvrX1euKhUoTmdEfSQgK4qcvXPWrU3QWCnjStF",
  "key11": "29hYWV6kzsumSQPtGdeSK369zWf9g8SzQNchwG7xLv7WLFg5x1XW5cxBc9YgjXeD6CevDmTcBW2Z2fnYEcqjtoND",
  "key12": "3qn6AtugYFXA99oL1DXtaa6Z3GsUoPWVvXHmQp8edtnfeLDENpoM7aT5PPqoFcLQrNAe2xHX5PssMBekrxEpP1WG",
  "key13": "R1bEub6rmmM2XG6obkixvz4Mj1t6eDPshqWxoyrA7kqrxfLZ77Rbq5gPbeqqNGMXMFGkd98msg433FHrdUYvruj",
  "key14": "4oKxH579sp7xWGTk1zGyhudgPRrNWerX83AHYGn5rC9ZEz5DGDfZFUY8jcyQLVQkwBeDtYTrcevzVz2dhVR1mtRy",
  "key15": "4FTJazMe2EhpoFrrmCoxsdnGsXh6GaVSZojFZveGokuMAiwCVbMZpWqEMNXe74UWQyoVtum1p6W4Up6WcHjeQX5u",
  "key16": "49fMiRuiaQsfxpiJezqXbmm3moU3aRPsGF8WmNmwP8ZzG659PnynCFf126jn3gRQpwpsixtrYNPmLJakMkKFqz1k",
  "key17": "4TNUfLMGigjpHJ5cU1xrZz33jn8Y8oFoMpQMn5VX5ttqh3vho4Cu5L4mjrhGTVRJW5UgngMgbmnC3mqnEgKnJ6E1",
  "key18": "5FeM2xsvu5VgVEQWFVbwZXcYBWPLmGeD44XwKpAdWEYMYBk4NF4RPQjK8Dew7sjjfWQbg3epcS7Wk5H8sHfed4ew",
  "key19": "2cRz1cCdvEPUXEN6x5sbSnr69tg23qifBKR3dztTDu5ZaWENxUc4R89qeTizsq92WWiLLSv67CrdDZxaWVTBLonW",
  "key20": "2aCpMkXMizDPfzGGoKX9RSDCz4XLj2ZRLb9ntLvmgP2XRw27crReP38r3RVXdJWQ5pzvZVnRyW3HqSzPiYsiQTpk",
  "key21": "4sDM4HbuV8snZDwDTU87VvXQYaRKgt2p6GYHSwXzPcMHiNBGV925t3uK9ai8oyKBPEcJKXyCCfbhaUZk4ht8EUa3",
  "key22": "5ridshk2nsJQMyrtKSs1X1BExoR6dFMZfDNH4zUXSgXkyYMGYxBwDJRqUYrRUyJQ9TGtH8RFYmw1cfwpprQV5UB1",
  "key23": "2enyTu8BaMVXNicZGahRrwES7pNbpaEaXQFHRRP2f5jMeAuSLPwcev8MFBVSrsChStBXXnSCo3QjvVuoy1rMkNuW",
  "key24": "4iWC4NgjkegQfwnjMyqhCfwkUhdRtxKUhm1MgwB1icCnv8HXeWyQx3BsacTdcTgBFTN6xJWfQrVm1RHRPJ9UBz7D",
  "key25": "2P17kSvrabwnAjPejkcV1c5X5e9b4eJwiMhjNm4c3Wvn2aJdd1GCvYk733rTUvbAviyALw9r1kTxwGKPbKRGfSnd",
  "key26": "2Qs1C6swsfj6GnVoNiynCbMpsadvQai2r8QYrRCxLQwwp2Cjxm5q71arWmxScijGMFDQdxw5vKXRAxatwhHzEBVR",
  "key27": "5QUvP7g4wShRJFKfocBoqitQGxZ4US1FkhuceKTVehSnbNK8ATutrNV6vTKL2BmHBdnqzjNUhr6JA8eE76jmzeP4",
  "key28": "2dTokUJksgSe3QogPVRcmXPhQkBa9Y3BGPemoFfX7E8ahnWNH2yguxhaZnPf25kEwXGfTeCiy3D1NNsWXaizov95",
  "key29": "3VVAjj9v5Gyetuzqv3WDYwhszy915zA4FPXABTyDEWMhz1AWMzWXzmYamcispDHZ6BVXQwx86EMoqBtf1hPmtnjs",
  "key30": "5a7zappq2nb4GSdDYBzX2hf67Mn2THDktNsjszab9z49BixdsGutWhBgoHjNXjeTdwTDo1kqfvS89CZAQ9RpAMcr",
  "key31": "5Dr7PnzYWKPj7WsjNnxDgbGvC5mcmFeeQR38ncxAKt3J9mTY3n1cVC7ppqUMFKYNmuaaptNz1AqTsScDMtqCpz7p",
  "key32": "r1P2ipNdmYRADH17QPcKQjebkyYoGEX1r5mr4sE3WyKDUe4d9LVi5BPWFA268VGFmQL1YbwaJg5BE9JfLRUZ7Um",
  "key33": "9jbMwm5w1CQYscNcjYuNUCpDfhyAL8FFVEfnpXWnQ49A3817fRv1dDoU3Ro9BuAPCWAETKqUM88MmDDrpjNxkxR",
  "key34": "3byhcMonU5bqKt36HqBqfHEnANtQ2soVUb8JhxRs9x8NTRauzsUQU99w8RBW2fgRTSW7i57czreCnFfXze8WC5UT",
  "key35": "4pS1nj3ErK7wSXiME9DwrXmpE1d9G8ZTuDgTCR5NU8BSdCHCdQDAJiJyVbYkBdXVqKZApHt6uMgkQ7uCa6x2BMof",
  "key36": "EvHkG7hoefGFdwkdcpoG5Bymy8DAmxU6pYCQ8xMDRgvMxTkKqubrjdEkSrNEoDhbERdXBonpxPMj7rfcxgonFUc"
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
