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
    "3SwDHXUVvuFXt6xqGg1Do7pEmGmLgv5ZfvoZgcgLYDfx84FFkGz2SwfBGifnPCeJ4A8WfEAzmMgJ1PrKSyyrkm78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6qE5M23S8SHL3EMnCVmyQKcB6VhavGHdukMvSaQoY7sfWBCRP2zJfdgccL3Jd9PemmkhShihjctEcz4Vq1PArZ",
  "key1": "2J8V3fARHCBvjJopsrGazhU8BZ8drMfGYpe6rp9kQdp1sEuZdL36SqDFhW51QFz4AsLeUNhzhLWUixzLHFPWbZqT",
  "key2": "5gMUAVMLaQuTRJ3XiUPk6RFAiSBiNkyu1VeYCpHLw3FaGEFQdH6PzNMimLbA2Ucaw5RHWPRfiFC1w1BHDRE5Dszv",
  "key3": "2qM5RMiESWuPDPXUQDeCY3bxUaUMYiufpTavf9FzZ2iGpMGBXmctHKydVAYmVpEYvFi8hE3ZEKUeez5cPAJZjAb1",
  "key4": "auPLQrWTRCasuFaKbjBwtq1UK1qMKQ9d3BTgYWs4f6kzNDPpazqr8qc9noMM3JyJXD5yvTCyw7RXUwdA5uHW7dD",
  "key5": "PE2BuN27s3MCeFhrge7mMxDnG1JD8xaL8daxT5iBP86Rz65NkGrcYCCGEY1kVkTvFVMuoQWFDcDWexdmcuZSfXU",
  "key6": "4cXF1etM9zJZ98t1N32rbYm39DVszvZt9jatdsu1JgYYby95VXxDfQnA19Zb8E4V9K55U7xADKyVL5YkxV8LquDJ",
  "key7": "Fv6HPRhXNxxT5pFRQu2MBfWgV8HcJZUrHPcYKZYugRz1q78FG2GpvQ8SKDiqz32USPBydoCWrqvxFvkNWPNdtA3",
  "key8": "QimdVYARWP75zmRpZgQFytP49EnZp8YCggMSn6Jb3c2jQK6yERg6HsyhVwvFq3UbQuj5o4JMvKwTV7sSjFm7N7p",
  "key9": "3d99CYzVNXn8ssaBFerHYJ1EY314epss5SxL4gMN1pv1p82eQh9PfQXd6nJa6DbptQ7tNDL58rZDZEvHFaKaKtCG",
  "key10": "5Lh2VzKeB7E6TT9xAYEAZX7h4eJxip7Vf7iSYzrj1escYcsBV72AajUsMdngkhoEk7sDjQNeVHbDqBPHAN5JBChZ",
  "key11": "4yPkYLRBv6FWCJhGGSKRyJoV6uuAfcxPH28QmgP4M58wMYWLLgkKAg9Ecz1jrAn1dvcPJbu6kj9YrSP1HhHEJGpp",
  "key12": "2h6tYtKfhtBLYkwWcFy6EXjWjwxgTohrRcQm8Wg15SYmkca8sj1bZW2pCCzQ8euL6z32cj95stNoxtUrSZtFJv8j",
  "key13": "2dN1zord1ZyaAJ7ra9gdqaJJwDPqRipDhJ2L3npd9E8xG8cQUpwRemvbtnPvXMavDnjEDe735pDQ23g8xGzZLJJZ",
  "key14": "282CZbutikL7VzH3LxBzwMrhuBC2jWXqWdhe8m1ejpHbXYofwonjNWHsRrPfRiEsf7Egq9UW3DS7MZbCxyoYzTBB",
  "key15": "3X1neCD4kHLjET5XhZZkYhC8nNkyUxh6htynEFMt7mybwncbojrGbezwgZ2ucfV5skLXQc695xRf1XLgFUGqqFWo",
  "key16": "3Nc62KxYayChDtchaoQ5D5epzeTy4TooF827KTt4TbNNt3KBMz7A8JYdA8ETkhpVHqZWmc6UxhJu2EcRRC3YAnhK",
  "key17": "5poNtfDkx98PnyRSyjpg3hBNCncnZfJtJ5gUWVXNUz379iZj87Guf1K4gQtVjSrGbgYu61hNq8N9tgtFhj75AZWe",
  "key18": "5paVswTiwVfc9BrJyAcrJE1huUQrhyEbzYXq7LLZdQ6XatLjFpQwvkDYAsYatYLnX6pr5wkoCY9efJFfiDm1hCvu",
  "key19": "5PnT7VdsCLRna4mN3D7hLUQWxXfRj4UmzkzyRnSgYZC92ZHNWk1koCtENuGWrs61HHpDUWs3mrnKScFdDNDRq7hW",
  "key20": "2hfW6hGhqzy1tM4oFiGZkKKrkhHgrPNCV49VEzAyeMPW7nnGziGmbDWfNfdjb1vBH8khWHVu72rmZK3mPk41qd6k",
  "key21": "4oFagXAJ1VATJ268Gn1MJuEQjGk9eJtmzAyw8cNwxzbSA9MBVSapnLC2gJC4T2yNjKSuV4E4ctVb17QwxJ9oKfDs",
  "key22": "37o2pNPH8FSR2Xnx3bL7LDPvDK72TzxXLGAuv7QGkp6Y3fHZcfkGuKVJdxQXxYize3RBNLtexShp58qtzwxdp3tT",
  "key23": "Ne2jUWv2dc62noJ6Vkq6eLe8Y4mbmMhafwSygwrbPvQ3YXy119DCELzQyQc4aocc2bwiPrBWdtP1NiE5ZUgpnF5",
  "key24": "251pEXBmyyDDCjH9NUjvcaRzQo4mmVHsfqTymTWqWsCFSJSgLQo7DFhf2MttsmZMNF8WoVCXnwgoqJP5jJAcFVWQ",
  "key25": "57GVJUmbh1CaWF4WR3QUjSZQZmPueCEN9fP5X3txRvVD7har32cqBZxU8Wtkhi2Mo8CvREkmaifrGzG17PMdQqAq",
  "key26": "3CQsmuEBNmgLWP7CUdoFkoJRm8XZuWWmuHDGEK3SGrdAeCUJqWucu8q9uwodJEkM3xgAQJaYBQF5bQ4gsxjma7m5",
  "key27": "5jLL19bnLTLosemVgSwPbSn5RCMJNoEsCPCK9ywnEgc3iWyf1s3ki4MU4XgSDbtjGmpxLnbWpXeUELUzzb6otURP",
  "key28": "YfweXjJmrxKjMfbjJkBXTFGdS52Y1wTW3ijXrHURbFwiAvyRijJKDEr1kYhhDTRFeKE5iEbs8c7JU1QJeYvnpvf",
  "key29": "KXqmRV314wM6uqC4JiasdkcWgSad7kWAzAKWi7NQUqcscCQdMbros7zn1sn5gsPUmNZWTSSTS2Lsj8hqRNarhkm",
  "key30": "2FTBowfyEr1ErgvXAS4DEyTXimXFWzVaNkUsuBgHTiwwhEDCHrCJsTqupfQx6d43G6E2ZS7WpsLXGEWpE6F6rFkL",
  "key31": "axruxR2yN78qsbvi55AngLquZ1JGWvcPxfdZJ1yUMTyfyc9UdQT9Ayq4ECtMwrKViuuXPsf2z6XeB34Chi7fPUU",
  "key32": "5zx8XiWMSpW8n2vhBbiFiFQMzxiZtPMCC5vJnogLCpeBK2xj6BAjrdzEPWoGsg6CyHcnj934jRS2kHjLDYWG5tmG",
  "key33": "KXLcGmcoFmLbk9escxnMxEPTWnudRFByGZbytaExvhTVCRwjoQWUHRurnePAZegytVBdw8sUwxyE1Q1vemWdk66",
  "key34": "3edRmiXd19Ges6j7Rfqu2FLCB9NM5xmiN1nB6uz9UwjJX2sXBnW8tcrgMrUeQeyXCMHpHErcVJJLxXxqcfHQVyrD",
  "key35": "4xQJdLQiGa3rz9JXZ5nFJnaaY9kkkYy89Qv19cdX6s9MTv1yb3DsnsKY9gPixzmRwA3VCRCercyK5LUavRN36Fsb",
  "key36": "5TNYUhEroCEH7JhwMxccXHo5na7D3gFDQUSkZnQWK9fmKk7uTAmWgyrFtr1R2vcGrEQM5zFs2tLNbYx7UVPfDEcy",
  "key37": "4TN7Zip1i8J3Yyp9Pexzm9pr9jn8Mwoa2ebAhXuEZoV7uSPxNgSVkRtGjUNKbgvSWraCvjQ1USPkrrTEeLZJdQwd"
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
