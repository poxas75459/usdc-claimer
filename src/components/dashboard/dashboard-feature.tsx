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
    "5VAkfojes68VachCzd1SQkKeAZkFeJsMHeoDVBtq6Saazakwpqn5GVfKcCDB1M7LG4nVaFCqYi1Coin19KJ6n4qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236Spqhc9iDGVCQUwnxeou3DQZAyQncd5ZUFHw2xXtFzxTFS1ry4T3XNTq8qMRrF9dhL388GLPjBNManCKZb6exv",
  "key1": "4ckANagNH15b2zDf1JRRxkucHdf1fLLXwHn4zMBU9dyNW7XDLen5x8n6Ho61B6wPz2PzeHsBKJV4sric1ttZ965b",
  "key2": "455mHTgDSbh55abVVYcTrTzbnSTBbSdsWwtExXtqcHZ3eSunmDqcj2HkfLcRJh3aavVVKu2QsfjydA8jJ7NZME5A",
  "key3": "4VevTSGRst4MoRHzkWUzYWM7uAeuoxpZGdYszETSrmw4wYwkgj6yaeM1rQ8pBfCUrrDYe8QuvDgsvi8PbiW9PoG1",
  "key4": "62gqiAyPGMudRFmwRbEXeTCLAbM12vNcgaQqFfCGswqb9mbkcpeV69EsrdWWCo6AZCBSKZCkiBF2YyumFd1fi3TK",
  "key5": "377484xL39YV26RzfUX2caDyKNg4Gcg3hH7usAoqafT4HvJJyf8RZNfz13T9XkQGgf65njC1KRy9bykBVHvZz4cH",
  "key6": "2eh9MEjCiQktqXn6MqrFznXB1HcS3wWkD12zxJ1Vn1umccqy8cy2CLBum1Cv96BNv6NcAMMKHXjMtdqmduNgYv5X",
  "key7": "5Loj2KCkXuRDSGpGG1iZjPRZmWH4djTHB4KNQp3cTcBsJTJeXMGvL56QnVwHp2wuHmHbiKj6jRt5ubAUoiWcPtoN",
  "key8": "3vEJK2Q9x3odkai5sEcYWqL5tgmviAD1Pza9yAk4MGWSAwxtp6s1Zn9hqYt7UxVHbhz3wXpxRE3ryJBrDocqjmaY",
  "key9": "2guhmDZkXUJnJpcLMCbVu8ipkehXZxtKd8s7MqwF8sW6oNPNoXiUpV29uPm5dMtKQqULd6WnMMxfwGYLsShHuepS",
  "key10": "NTig6mcpYA1xErFT7RkBgTj7MRkdzvCwjwFooKRJZtDyMLuJjZtzcsGECCetpwfbiHqbQjr6dCkvPFo8uqMyFkk",
  "key11": "Vp2wQ73pRPA7VqwAvCCpPFtb3KQTSUfPRFp7WYcvoXtgKepqfUYWcsFXe3mcmtBCke6KR3h4UdjkyXgwUhLisjv",
  "key12": "4a4bsWo9E3M3ixaQJXmMp3gtoi34TGKsBJnJhfRTJZ7deCDgRWzHL3xxkpqaC3G4FXAhrgU28igoiJS9snn74cGw",
  "key13": "2dAj5NaKcaiCJVqTYtwciNaejug41eQ8eZvVhH4oeTQyNDkBw4R9kyWMo4dYB5STWphowBBycXuauyGx6kCZ9BRs",
  "key14": "21rdYaQbxFtYf7cPrmJ5kMbcnSxGP6Weg1i64ddyvbw84wYsRfrCTGBJzjBMKw7Fo6W3hdmwj5HTEP5L31JZ2MQR",
  "key15": "5HBPAYz7QKrzEwQFsPZWSXEYMoCf8ufrbeaXAXcBah6cfPxcHT6Gdv3NxyrTGoF7HQuTFF3z2WAute4tWPBMJR11",
  "key16": "5ZtNmbEZRoqhGDmXU3tfD9uJLAMAYsz8e211RbBNjYnJoNSkX2zdsYBZ3PYSzDzpm2oUesMdaULkhcS4JQZJCK8F",
  "key17": "3112vcjQJswTSvMDzKNDDP2rWZC1WmTc999bVZMKUxi9JE78Qcg1zBqtKTwSSASaL7kJg38nWGwTbebDwoE9rshJ",
  "key18": "51RDLQ4UVgouQCoFowDUf6mmbS4Ay8x3WM2zhAjG5zBK3NPiho2jzj4ovWncuxrvc9yYncCeXiURzZed5K22N7Xa",
  "key19": "4vvZ2nqQmfBbaVncqN23CzkXPsJY3XLMm8S6c5vTTYGERwGGBwRQxyN837yNh74o5MscbKn5L54QcCv52NKFRUKS",
  "key20": "4V2ToXjPtrz73aNf13LXBPLgCXAq9QCCd942VgkPKVt34mgttV41Db3AjsEnCuW4Ne5enAWh4MFxhwecz8bxDDh1",
  "key21": "535DuL3kSt6vB7i1HNsAuKiJBV9ewzN7TWArWEmpmRK435xzTwdiY91NXXccBTnhoEr6V3oedHbyxUnJNCcnuKFd",
  "key22": "4rcymQ6hzTmtF2h92wHSD3V26SCgGXHEJTMFGuexzVGk1uipqSDTahUUiHA8xgajHfYNrJpuKdaccWNqFpAj8wJ7",
  "key23": "2kAwU3cRKdZWGjPF9ZRZRG3cdrbpUHD2EpKtLmzMieD9denMWzXH7Nd3p9Gqki17FzjoNs673txefUcpf4Pp3xCe",
  "key24": "5aJehimVataXTTuwVt7S3ceVBEoT9Wb2vyCHyPJnKupcYDh4Q1QBhsW4Yiat1jPJoFxdYR8VkFUxoNh2ieuSbBBF",
  "key25": "aXZxZxSVkHr7v7hnvCzyLboAck39ms18W5VQbvPfZPNCpCx2SxafSV55cvSAxx8YywnzuYZjjo3ypMr5rdnfpVB",
  "key26": "2fY4kz7GTqDuMJw7hGXzZk3TpdoMhgPCV8GwBmMSyrxrHbG4oz2kAsexhUng5NvvzkPVJ27mij9CCRwxiNocmYKb",
  "key27": "4oF3PBeW6F3VagiMBaoD3jg9B4JLHzAP1japwxyjypxJy42pAsnnaeyevWNa9LB6Fc9LSsksdwc4PYgaoj48E6BJ",
  "key28": "8fX588PoFagDv23dNGVLei3sYmfvZQ64hQb18sXPyXbMcCHQHGTShSkWKdWDAGhoN9kMuDVpmgTuQtQ1JUzRkvy",
  "key29": "3M56spb3RnetWHF2Rxc5N6gus4QmA7qSBvJPkUMnaKHCCSXMcW4pvScG2cZ4cVZxKZFHxWDxvo5f27m7bmSNZzkK",
  "key30": "2VvusQLxvBbQCvzL7XWjcFmMPq3BTLvosCNq7t1vsgJ5qwbvaBHedYubftM8YzHdpNarQtsQjpGX8jbRtSdJxX34",
  "key31": "43NqJ6hFrAgYyCdReUeLCgJGaoYxZBDhTYKuNLBkFYveqnECGr1nVopHncpaJnVeUTJR412TUSd4pjoZVaqKWX2d",
  "key32": "5xibj3xuSZz9pUhG3f4bedTxaYM4EGcUy7KQmXSMwY91LVm8doHtvyGeZNLhK2szcfA3CrZPTxH4Bvd19j5DMZre",
  "key33": "5TZ3bnfgJVRSHrJLqBYsUsxtN4V2sHb4BEtRdcxK1LWKJdv411WiCbso5fCamoD9xVcV8aEtFncFYfWbHz2iPJtk",
  "key34": "5ARah8Jf5BdPDs4C2bPGhiV4ktxDJZRNumnf8CmLEwNrYeN8hQe5BBUTPJ54MPWBZSRqh7x1bMnxAyrMDySmd9hn",
  "key35": "4eJPkB9KgxWgrWrCX3mqEoiM3bpUMFZYtC9MJTxFBQMENYq7kFUHfxa91s1Gs5wiHwkSqW3STofy5NaC91uuGQAx",
  "key36": "NXs1kzowV6Z5FSqmP3VeqbxpDosUWUfTpjpqF6HFMqfvN3hxh2T2Q9RgbhKq9yPRPb34qtL4pNw2CzRgAWX8K3E",
  "key37": "5HRNDkipdBvqnPfkT4uafy3KJywYvuGrUgKbG1XXveDwSdfJg3gMEAJA1PCxzkPhdNFDxQ2s7HkuAZYScjiCcpXc",
  "key38": "488SbFTGLAgtWwxeVpn4EsCfNQJsYnuyZQwjuPZSq59fYtW8rpYYza4A8tMFSZxjCnKr5xGqsVLvFY5jj9mHEoot",
  "key39": "5roCrgqrxsyjLM5Zs4xe8zqMTtdHm3rL831YgDXJ6Bz8yYHD8U8GqGWV7MtvijE1KHetaMQ2Wxi2fwLKszCFFT5z",
  "key40": "wiX7szA2MTCP9wnmNmboEDGCy55TK1mYygfoqLfMbpL2H5K4wvsx6ntXFVeym2hUyoo5fCX5idfZij1iT2UGSok",
  "key41": "38pJ9NLFXCunnbMoD562N5nkaZLwbReMHioZnTV4SJQva9VMrtxCo9R1Y8MXjW1ywaaMuTsMehNJRv66qWkC5n9S",
  "key42": "4Wr75UFXiyZGuKPZtGGVyHvsfggrc4oDKX74Yt1T3kg8WWuKg4eapvVYV8wUa7WtmECzoyR1EYqBnBhUEvL8GX4R",
  "key43": "44cvA3pyyBF4axw4f3PiZXiXGMhqAQmQwBr1fTBZcfMUUqUnqZhqSgYizaAzqimTPfdej8HF9Jxs8GbJQqizLdfw",
  "key44": "4eG2yM2Ws8ixTTEF2vn1kC7c8zTkve2r32V9BPBz64PhHiHsbBRh8sqhMEEoDZJmTuFThzQkRpCVrDancN3rJwgr"
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
