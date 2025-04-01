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
    "553Q6mUkvwXYAaS6KQAFKSBAk8iAqguHpnvhw8mL1BXY2acUUjg85X86kxWANyqJ64jVYLwdB6tvK7yptjbJ2VLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mn416FW1bJ2crG1YeVkie1fvGknxknZURucsyLBUeMXQYGrrsYznvmzqTPgb2zFuXEQwMCkB1k1CENq4VpSqic9",
  "key1": "EiPSh5ZQRiDSUprU6yeCDoABLRXjQobqodvy5yGMsnALdJEk8uzsTrk5qtcdRg4s8UBUT1Tgxy2nqaSoEuBxHTs",
  "key2": "5z1tPP9wDkTrz9X2jeTmYafzBmaPMNvi1fvUbBa3owTwg47fdpBuUkENKHeGCUXjA8Qun92G2dfAXSzUqHSJyxb1",
  "key3": "3eT7vtszBcRPMpHP6UMVFh4LrYx8Y3k2y9wrJRiTVi5JVZTfwGHUVTkTACQiwZb8i6NLNswuANvTS34VdQDgiF2N",
  "key4": "4QCeo2QbVQpfB9sRsFUpwemmrq34tsPGtJwajYM4tguXdySjTpH85G3VvjiEx3YPemp4h5KtTBeSUtxDATvKeqPg",
  "key5": "3KpQXYZU3ms6WMFRLhTs5ahbRBELJuKLhdCp2TkGSZVGuwEa4J3jUhbrmVeq7Ns1HiBbXPMYw1e9YwiVMgu9wvym",
  "key6": "3TNkmnGZLw9Zr3n8wg5eovBZ3ndA3Es8ekY6Q6ASXAhRCY6DDJfbjiKK6GjxPybdzSc7aKRJXt4aWUsV1owVmsgb",
  "key7": "xoEckbRU6LJJduapRzTFnqgbsEih1b9uudU5GDQErcW1SohUsiHLqivPon2xHDmgERMVBtHtw6wxuCL1ajaggTP",
  "key8": "2SiBYxahYCEnxVyGzRTaaM1otGzghuAJpgDjZokjGTv8iyCwDFXLi5BEsA6PsF6JcBtouxud3VZRqHPFF3mUjavB",
  "key9": "4Tw3Mxn4zAijC1BFcyQxAkXkuPpzJXAZtJMRoZEbLa5XpjDzymtYS2DdChGKTnTDRz1z8QeHCWH4ngRHEwkTJfRD",
  "key10": "kqGtiiUyRBY8UcXnPGx4JnU1zBF8QaMU1sLzEwnKhSbauMZ3fNrTmegUH5ATnrJAJvrGRtWESBQcxtWD3oMHYj1",
  "key11": "2xPSXM8twpUtxEg1uEhU6yY1iJMTkbqXkDV1BsX816UZvtBGAB6V3cadoixvpfPsUHAZXQyyEGYSkByVSXULmCLz",
  "key12": "3A5V9NuNDEthXffUzMxPwbt1oxQjLRywp88GiuyijdmTm6oVMyXTLZSX3br2zsh6ANhgikk9evkZY1i7w2bDZWs9",
  "key13": "2CsrjUxzHqGrHfTJBHThD8qMtaHUr817QDTFzKLdkP1gco3gbeRH1ELmtGNjqeSYXSz4ELMCMUFJwxs5EHgTjF3Y",
  "key14": "27umqdZX6Dkb15QrN6BX5Cjd2EVQYMZVcSxLgXsT3s5X35jpC79sM4N9h64kntMDn6EBaxq3SvNczjQVKZ7frybe",
  "key15": "3Vrnv2dcRZiheCJ2XN3Y4QT8ye2Wc4vJLRx4ZDbep8kW4a32DfrPJZ15tCk7dK1p2zP2NiwDjmZAHcwUruSzTRoo",
  "key16": "4SMZdSScnw73SKSLymgczSiAD2sxXk577UzyNELnXNEfyXs8psm5rgUMxeQRME5N7qHggatHSsm1HY4i4BAmtfsC",
  "key17": "3wfMdDALxtweqigoS3Nds3nK9CJNP9xpHFA63Vw8u9hW3d3kg8XESkhyeK8GFC1VtGin9sNJe1hBXCe7V1sCTGmG",
  "key18": "4TG4KpeKgqJ3ufq9vb11Mb5VFccBCnq69hZn8H62RU4DN6NYHxBr2etcpgovNNkbbTRVD5NywzHcpeYWq5kFY5iz",
  "key19": "ozqRsuDNUGdET84pbskEEHoDBZP7Banu9JWm4yZMcuPYykBU3qABnxomjEVHniHTAvDuoQxyEXZa2SmbmL3LaTg",
  "key20": "2bhYe5xA9SC254WcVT46doUSd537wCDXHGtsuLKxcgYCz1SAcbVuR2hTAcYZRZFY97FbWPAuRHPGRnaFE1Zvbzct",
  "key21": "mVSEf2EqvekoZkC7f3m7QoLpXFT3qzVUqBzRBxWGZjVnaDZjgTmbnoFeZfQBuhr19MXJ3GyDaBi71KFwEuWSUcx",
  "key22": "23o8wXWg6zrXVJ5KThPQ3WdNtdVFSqnbf7T6JAyV8ZEYojYZmMmJhPoGs9skL7VbPnE4kQ3itoEKW3fFsMobeS97",
  "key23": "2jivR7VpEydpQu4BNh53e28QQrMSA7KeP3v9GdL81wzMH1MGNVkPRvcxtSiHoPzwcwZ4kLaRChb2bLZ2sPVdZgm8",
  "key24": "KJcjVCPjF27eEwk5rUGfbYXSnqtDzcqDLahthfiRaaCgiR6o1KiW4rTC5KeNVrB4yiUq34VY6kArS86k53qfuzn",
  "key25": "2ME8CvyYRgojjEhUareJZM4H6AgZNJSa1cz5v9mAaghxa3bExm4mQ1s2AnERiEaMsmyxiA6rFniU48KgLMbq22Ph",
  "key26": "Yxs392oih5vdif8FdCTujuFYyQWv6GrMgtJ1PRKAXxC6eYm67ZPFGXhoRc2JCPdnvhxCjUAS4p8Fj4crufhu7Ru",
  "key27": "3aCsC4tnq7vcAvjD7YKP5UKsHLcjcwZDXgw23PeQp85A1U6RonCQDsqZi9Xu1ZDo2eWuF5vFToUEmzmVgThhJdi5",
  "key28": "5ScrL32Aw2c8UnVvJoT63dnGVmfkrMGFZWC8ZvMSvSTGWoXLgVFnqZ1cdqmahUnqMDSiKP4SZJkqEYbRPRoqsE2t",
  "key29": "31Tnpe2qbsFKTCAPdwiydg4VE7bDAhcXkn7E4LgJXuco9QcGPqFeKYF34EhXP2J95dEfWQ5SvNSS9dFsxPoJ2QZw",
  "key30": "3EinVVYPDG8jdp2Rs4ARG6GCi7jMcJ3AswW6HNjRvUDU1zznN4jYJjybyY1UgYUfZ5iS2Uxf1fPBhucyMqDVhhBH",
  "key31": "3uFTJnVHipfgTDKcMeVygpbHraY3ZFJThYxkMJtW5JT9cxgy2QDJNomoPdvG4XqXbQYtDxqc7dBKdksZkd5Yfy9q",
  "key32": "3NJdu3uVDHAng1StUykeRk2pnpW4a8sZ5NZoeR67Jfe9WtkFdVMRPyXHEKQubB1B3vDGiTzSEg5RdrFLgYp9Cmfc",
  "key33": "41WCwLrrmLXTjnqnsEwoVkyN3Tj8pX8SNrXcJi9zj76CCcbfH9fambaQYami8bENtvUGqEMwBRpS1fr6kR1ANChG",
  "key34": "43RoR3M1dC2sFpksLoo9ho6ymjruQNim2HesCvJLF6TY5QMtGdC1QPbDDa9CZk6JVpx9urqnmYw6ftxskZRKTmT1",
  "key35": "4DuYaY7nG48ogrhWt56Bg2ovUQvM8YsTXUusQKpbM2DLzYRVo6NyyWAwyKsMWYPXUYsHDYgP3HtbSgnc5hokemzJ",
  "key36": "5eCsFsbjLqHFC7CCW2FuR1JGLubarZgrvKWDP9T68jCPpJfGDo1WWD6HwEjgLhyfMFqoGmLcFs1f22jb7jcJnQAw",
  "key37": "4S9sr59bgy846eN4j69f88gzVGjEENp2Di8JffHusLUr4TJ2cBRkbXL9uAwvcPT88zpe5KSpsxhngmbXboJTxdKq",
  "key38": "4UP7JFGgPiwcDBDW7eSriRgnFnUbefM3vMbVyaTwMG7G2Zs7YVbqEdfcEPgr6cB7LW7TLKaQSg5kB1vVRQRQhacM",
  "key39": "2brTWFu4FCnSWK7sx2gNy8EfG84mJi3B8gcX79pvjYFyUiFUtm79z1ypMbMWDwZNPEdgroPA6KyyrLMFSSM5k18",
  "key40": "P9KcUxMEwodNw3K3T9iDGpHFEyEwbwvYNMB9uGM8Ba9fnVjP3kQnfYY5u4nFuefUEMoey5hYqJGdf1xzberY3wK",
  "key41": "3Eb3QnDZhkYiPWwxiSUonRUF7dSsSY9gXiC4RZKzaQZtSn8in9g4UyNTLTJ5tiFFXNtXNHse2nb68MNtNjxcDr2G",
  "key42": "KrfiKKTT5ezJxULFz46diMBRG8pXogpWCE4TP19vdkPfkUpDe4pi6v1ygELQ7hpuLNtJPNqJcpuqmPrQ6SgDSLC",
  "key43": "32kzSR1fgwFJF1ay3q62kBStmUdtCGAsdV4xV5NcfwAU9eqnhNUQ2AbKnv3MgxuGFn7RcFFbiMyYsVArWDS5D5Qj",
  "key44": "3u2b3zFuJLFeFUWsnBamr8H4yyh7qgzevYcyiurZXrCyxKadGuB97gCRk26bPxSHCD7zqNcb7Wo76oEcFbMnDLgf",
  "key45": "4UqjfGXd6Rce1aYzkgTaLNnVb6SuzPT4Kvq7sNjQtxrZTfYpiendfTZJgznsU5saeQiTtiARwKSHoKVfcbxPTuH5",
  "key46": "5Xj9zLaLvkJAmqmuocHuE1NgRrEUZ3WfjaHUPqWWHjxs1zozbadCoeXSix6j54SyxCfcGjuHgF7uuNmcMMBLYXqp",
  "key47": "5hemEuAQHtVnYVSUD7FcAdBJGQrLtqQMRNrL7sjXWoGJnRSyHgmehU9zPm11SzKMZQiTTxZS75CqTzi6fv4vwQYZ",
  "key48": "5D9KFVDwJ9Kz1FZVMT2bky7kCWSTieShCVmkuq3eVj4XMgXb3JAVE5k6LCb6prvrDb3FBP5nuyuAdfCBPboupVMt",
  "key49": "474vFs9w12V4YmVx6q93fYHcJzZDCKsNtk3svbQJ4NgqxtAGBX9D3tX2WDoCkbKeVjhyXwTkvU2qqBojBcqDkLXm"
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
