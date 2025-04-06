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
    "3NgYZUp8M91FM1LGyjEZiyTLh3ivbUjKbFfc6Qfob5bbvacDpwJo3p3okAvj9jexQduHKmr8H5wzTzikEX8obfrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMdL3K7tBovRSrvzrCBb9iqe7TeehQ8vuEsD5CbbHYtPkou8fPvoTw5ipR7SCQ6LyCutMuKwbhYTYb4dsseiSc3",
  "key1": "4LEidnAdmpxyPjeMHibos4mPopbMZoafkgDq1da8Z2FHVKS4dkfRgtRPbjDW55x2pxcHyDQopGnsGDYmnpHLpqdE",
  "key2": "2UzRiGUjwPTY1o9iKyWzjPKbdsz6SpRbPdGXDS2Dyg4Lvw9gznMVn1apbKB2iM3q2jvkV4oAm7pUKZ1pALjbQ4UJ",
  "key3": "2BDfGePBijj93xuJqF62M2BX8i2zmiTeKYiwog16QfjXQY8xBdyxjLUWKzvco8dCShdetbyaEabFy9TmiMWdfgJ4",
  "key4": "5t3ndC4AYFt4ykjRGtuXJTCaLgVTNL46AnD5TmGgkU1fPMwXc8JEj4rCLiz7NzFFU1egD3dEQuK7MWniPPcAMwuc",
  "key5": "4pJnH3v4fernzAKRY7JviX18wG99VeehUV5dim2a9PfEnxCrQUPu5yfKzzCS6aq2Zyx61umYsG8XRREbMXQpu7Jv",
  "key6": "5xM7PtV68UNSM5f1sVeGn38X9SN2wMrfozyjFgMPzUxqG2Vh9MARKbcP51aKB8pxNeVBKg3uhcjPMZeuK3eBV1mP",
  "key7": "3ZPS8Dkuuu48qSu7uSamteCYTMGH96YojaP9UrYHaYNcYyHQbmbmNzRiCbwCJdU8KeeWSwZ4cLURewKQTXwmk1bU",
  "key8": "2k9neLdripH8HhZH9tJLjxUAuv1mgcgFnFBgmybK1xdQyWHA1yvjDj8r1hTSFrJjkMUW5iEPrBQqyac4FUd2eZ7U",
  "key9": "2imTrUA4w3Mg3FEakALUXbfZFdPhApG33AH9p9ifRAWyr6AZDzd6bXw14AKqdpxu7kKJh1AkRG4BuFkKNnJ33JGN",
  "key10": "3YaRy5SqH9Rsn8oYZpWuDYnooJumcVAWmQuCPhEMkNA4x9P8ebTjsGgo6LJJNzrwZG5Jhto6vTaViNJNowXARvcX",
  "key11": "5F9jNqvUMMCVwxfFkYozVWhw1s9BXgDb112RbdNzAXmLLUJDjKeJDcubMEwFpCkRvrgzNyGDB2yKBpVpoogK9sei",
  "key12": "EvEr8fspYTmKouL1aprS4X37ByLx6ptJrhGKZQDw2Ac6zMntHPCZeWLgWBvmkUiDtNgfVRc35hZ1NSP6vnJKw1b",
  "key13": "3p2xFzvePmtwd8ReTvBLZKPn4jhet517MdHyWL2BvET1rEwJr9dADku8u5MjEPYdt21ZdcVW1buV1Y5d1k7ERLC2",
  "key14": "4Yh6WnHCYihUHpBP8jdEH2XHmsmjcAp3EXxjdnXQN3aGkkx2fqdrwaWP8sE3wVK57c2FFhXVJ5F8xjpetjccVvvz",
  "key15": "3RfjAGsf2pLUPsBAHbstNP5ds7yyss98bTnv8vQgqDcF2xqFxecyUe9qUk8oM5vRy4K3i7pR3ieJsDUuNRALucL6",
  "key16": "3GyzaiVtJr9a7aPhe152v3sTedzBmNTZ2GcNvZSidevyRYStaFpX44xGY3qiUFsymdFr4VvCBTGAVnV5TP9tpWPR",
  "key17": "2VU6eCU2DnxsmMDTc2KHkdCYfducey4Po6mNXxyESH9WR8WyPPMHGABbm5DJDdAjPS3mN6q36oadu3WV3gpC5JW9",
  "key18": "qiny4epJdGcWKFBka2F8VPHfpriRZ7QrcGK3nUHcGHULYzcPjAPkKrS2D9b5qpms1zep5zA6fePtxRAFhRQEbkC",
  "key19": "5FgpPEmP29TtLfWHNArWZNoqHkkMTcpnjCUThBCd89Xcx4Agw7Qbcf7V7cktWuTaHTD8utcTACC9NuGKdRZeEvK3",
  "key20": "2XSCg3cAFErbNR8bT2cePezRtJMHGo5YhvxnWUVDp1RSQ62Du97G1CHhTkDMJ739nZuPFH7a3oB1yNDqYXbWqdMX",
  "key21": "5By1qv9qspCUb9oCqcGwBdbpHebUnUTG7ZvuGeSG48TBqy8tPFuwhiYoDSbyi3FT7dXmWQwmVuy9M97gyWQ1bYA9",
  "key22": "5DR1vpBCtK3DV9tgasMvmd6uRn3WzSjvNKaGNH4QgTSg5inBVHa7LPX9biQ2DT2Mf7bmVoRyuTVNyEJ6Tw9nAycR",
  "key23": "5bzcvFcnNi5CipdKXm7kSWGngB7e1DxrTmT5H38xtLMuDC6DuVmwvDgatPfB5pjeHc2rF6hfwJqoZbK2tb4RiEhv",
  "key24": "4Vmz1fKPpPaVNGgZdftUQKWHGzw2EZgkTnNu7ogoBWJMXAeC5bUGwyBairvMKVuUdNeh9JHWzf2e74pKh1Ript8M",
  "key25": "44v68AkcoqQADSo8shtSyuW6rpnirwjqTvgMdmsuaZft93hvhjHQtfERwHGe1WhbNsy1SG5XAwm4CAwadZgKnnLv",
  "key26": "2EChsRPBVLBPaqkEKaSvVSHkP1YGf5Jq9jhNC9QL6MXagJuP7ATqa39ZRzVNKz73xK6rj9LxhdHoH2hS8QfqsLjy",
  "key27": "21dcqvWzN5eozn1Fofhm5XDKuFhSapHJZuQTJPrvwbHrGk7FEi7kKbeRQxe998Tup3PsqLcd3HFhE8EEmJyuz6F6",
  "key28": "5gmf8JNNHZLyUuZeCDqpx6mfyX48kVGd7raq8VpQYdE7cCaTQyK6mDLfT1cnHttHoCBQpaWtBdAif3Za37LcGRvn",
  "key29": "3xGEPWPkCC1nLHmQjfrKCT1MhvZUDe8EgTuwaqexznxMeF8xsepTX3coGJQn2ooALrWbidtY2QsWqWYdx19dCavT",
  "key30": "274FwBKjxe8nxRr3Lc5xWYf6hri3n49ZmjsmLEzbxVuC86QMLw9CLM93Xq7idsGju5FLZkC8Dqk4oj7v4MUrfQSD",
  "key31": "ocHriwziYwwBg4DDQ4Lvpv7QCdrDxqGrCgYxDt27py56bHWfFPduELzWGAPWquU658vKg8fFiV291WqWRofMTuG",
  "key32": "61jzwxiLwNmNLMaTgaAuJkq53jpXAx33rniJAav22S1RToyWJKaGARQkSZX8Fne4dKSCx9JFrPK7Du2nZi1WisKT",
  "key33": "4iPD1TSfHDsxd3yXsc3YJrH3uDNsg8EWYGjzx271TPfFh21DkYQfoLXwfPENHZvWREoFoC8fCD37YFXjPjFume6j",
  "key34": "4HLoQRLYU7oo8QkbWQNcuoTBDweWfyfRXe1pqfuUrbM3fwvD1HD8fju91rLBAbXYAUCk5C64ibQEtRkDqC3DXKAV",
  "key35": "4JR3Kz7Wn6rTEseqqN8qnH9ftDu8e8FL9MQaeN3GX6jr5W2MssNZMHPoW6gwiFjG2Fai2aGuaVH7KRygRcQdnsJc",
  "key36": "ZRTV1aZfpGEbwwqssCKpD3dTDduhKqvruVhiHbtZASSTc4p3tuJGteMC7xLzPZFTt6DHPBYXcrMTGsf7XtygYhF",
  "key37": "2sFY9ir1KFj2nnGmMuP8varQTvevkHqaGGc6r8qcH3Ny9m6WVPWQq1UYGJeCcKSf4Erd9G7Lbm6WDwo2F4Reg8HP",
  "key38": "3tsv2taXSCsM9HTKap5qQDkEeozvuGbenvumc5GTbAmfLtpsmJ1eLJz4baFyrcwPGZ49fewvatkvNa74gbvayyAb",
  "key39": "1jtvdE8D7fYwKpi84Cjr6r2dFz3MnwEP1G4rdN28EDzXGbHVTbyiLp1ZwFNhkANBtf6XLeWPAKKjdEEtxLPLsir",
  "key40": "3729yNsvQ8QaRy9iSqJ3cKZhBjKyYbTHXxvpYpKQWktsnK3ozaRYFhu1Gud9h4Go4kPGJf3oAmfKPGJg5f5iX9Bk"
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
