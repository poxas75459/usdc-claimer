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
    "2hTTMXm2LXQLbbw7NcH5TFpJLpbmjGgjPy8uh4kPxmqR4vMj4V2RScvsAZExQHEdE3kYiWAyeJY5xYjVbHkXEW2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nio1nWa4mLEfnQ2CSywqWj4i2sTz6TpgnqZTs34QR4uMyo9KPmu9uMMD6u27ozeNdcJULkWgnDT5d8JRP2r7SiK",
  "key1": "3viLPeLmtfQx8MKBZgsthUaRXLFapErwcNPCRRQoQaSFvQ7GDyrU4sbkkgshyCcHsk1NgUEDNXkxjc4Tbrnibcoe",
  "key2": "sB78LCm1RWBpE7CR2oUNhminxKWeQyGou4wiLammikt82P62HfHGkRYSSNjoMKyiqSDsLxr8mt6Db9rL7iTetUU",
  "key3": "fJMGo5e5gz4JCs751yJ1K4Dn7Mde6gMK3ms1RTYu4zh9X8g3cc1796R3fzrKtiZqdigYuaoLCzDz6b8Rxkejg8P",
  "key4": "2AWdhUGWiNTHCBkYjLM6zcSBEjwr6BZEDRtLwCjDMG8phpgH2BuRVvkyAkQ4AYa64cmSvXidkXTfgq43LAMjfzYm",
  "key5": "Eo4YkqFzzf3DFpBFZ52A2LwjPw8ybMzMtEXXykV7zz8zVggAyqqPkfhMiGmoo9QnT5utJKZ19qCh5Hu72gDtfZK",
  "key6": "6vno2Q8HMTX2tWsK6u7f3gW4n9D7SsgExpDnwurB6CkNJpKDFB7BRzohJCPkM1dg5Brenhz2NnWNWqc5yT5mgbv",
  "key7": "3spzzgZ9tsRbX1pgUCzWEi7LmQoYF73Q44q2q4S2uGR4RnRiBK6vLGncvx2KjviDWBdv9Ta9GMrnEc8qoy5NBwt2",
  "key8": "26TAXBdYK2Jb6UFNivvwKxR94pr8NcTSnmSQtbeBycjK4NaZcTdcnn583cWpn8SXAPBWGwRnuKzDWeyg5hg7cwrL",
  "key9": "3RzbLXctpNLRHwEB6KYjMvg9z3szxiquRfFPcd4WQRt7BV2SKDHU13ZnnF3dRM74TNa2MY4tbAUTeLSuNKR8CKcM",
  "key10": "4X8kStpqncZkCjKsTuQPrTL8ppZHpHMuBMpBSqg4JEU1wnEVoge7gxbWedz6wNsLzEujAE2uYGh2GtDwnFDR9Mg6",
  "key11": "3AM6X51SMdqM4bin5zUttPJFQLCXpqTQH4SfgjFGn8ax6389zDHdkKRSRFh34QfvRJawusnYAerVnbirX1FEk22r",
  "key12": "3PokzY59avQjGmUhLxSP6v3v8hnQFgkwMfMeUc3hQNN3PSwtom1zFahVqenv63d56eetwYJpDae1dZxDNGaMjGs3",
  "key13": "3pzVehR2SSX159pcqqkgQHorE7nc46vKNwq5dfsYBQb1m5fHJTr8dzjyKK8TwMZziSUvbebiCxjfSdGi677eC2G1",
  "key14": "65ryAiA2KqU5zorAeLWcc47D4r2iBs8EePV4TmFaaJpN5zBEosDNjShVYR3symDEHTAzsagffShgVLr4p4PPmhsW",
  "key15": "3oLTrs5gCmumWXmBHWA9y8JFNuQry1xAG9qR4BrAqfb6yin3ML21kHHRYpWfmmsLgEmEpvfkyaoPBKdPAcNdGtr5",
  "key16": "4SXQsqutjEXBBvZMj2PRXE1Jvd52XRTLvwRh1cb7U8KHnZG34fjc92oeLSwroSbgpQ9jCBrpr7xp1XLvcvQnh2sJ",
  "key17": "52wgvZDGABVRsAb3ULivvebE3d1PpbgSVcnCmrWYSmd98HN6HLMAGraGpqUDKNqGhdHy5Egm7fQhgQ43GeNfn84b",
  "key18": "2XuVh6QBfwZb3u24qen3WNLP7DMumRMnzVWMemNnDKUy33Gqtj2FnRrq2uQLBszBoy9oppNpc2v6iS62M11rv7Tx",
  "key19": "djT5i8busG4xoaeW8cbK2EjRoB2y2NSmeLw83rps7hLeysDb7utYRSep5K16gPTH8TMbhfW9nf5TTcdigpwp9ZL",
  "key20": "2w2a5XWzCCwwv8gQYeo5j5Dbf22CDuVEBJrWsznquSXMZLiUu7AJbG7Vwdq8qLEY9z8VFJbhTuMjLM5UCdQKNdj9",
  "key21": "CJRw1fJ3MPfVuB1VNJpeX6VxbBTT8ywcJDd68KZWbBWeC2mtzeW5DXoPscsr9pFJXjzFQrahsSLdnR6EWUqnprV",
  "key22": "3DiiHtzqXKLge7czXDANGJQB6MWgYn33EfmmCVLTAwnQ7DaUTREj6RsdsghC1RZPUmd4AdVYYSTVNKD1AW6wMEzo",
  "key23": "5TXKD7P8JUAA6fMdggURWPzEQmvW4pemaTieKRnxJEMtutkueRhCZLzzojrSzQrCci4Y5bAPjnyoyk3VfWncwqjp",
  "key24": "4MfmKqKpUcSiDZ1pQSmdbGXGsqCj6TnFRtTKUG3hgKFZmbeVATr8XdBo1nbDy6XpAyL6BdtfpAn8P4ihhf9xAgkt",
  "key25": "2yupLNtsFCXV93M2BkRP9obCSDvgKYcrhoHVAk5LMDyaAKUrmyGEUysMGLamZSZpJvcMMeCtnLYtwkkDdg1ic7z7",
  "key26": "3ELqZATXu5zEARFtq3wbKsjdUREAL2WL64FCkDq22h3X1xSYTDEakkSqSZRw3KaDT2Er73vqUAAq3oKY1VmDiCLU",
  "key27": "6NzJ4KamDG2H9H76k2CWxE9WQYB9RfuG1Yfga7AYcznCBCgtQ2bRi6YH4jWXUStqB2UDhdVgys4tRVDXrAoBeoL",
  "key28": "2XCiVGB2aTXzFhSMGVQPhBeAk3i7rZfFMnZvrsrnC3BWRb23dd2beKzCScSgQAsUKX9HMPJrRwsH3EcT3idtXWti",
  "key29": "27mScsdjPiX7iP3Z6u3KSTSoVjXNjnmXTFkwnTiqjhDJJkzN1LGYcNnikukACDBPa2iTxe1Fdb4ikxmAqLJ2YEEQ",
  "key30": "6eC3sYznnCBGvN1Ak1KQWRScn2mn4pDr3GJpaicvKrDBVaoHPZexABpUqjatqPetodgCoeatuGVh64Qq1cBidQg",
  "key31": "4HmRGBeUjLh5RqfoHNh3jjSoVKGY48grkicCXna9xxyLsa39F7dVVmug4yrvLzA1g4ggfYuShP5t957kCwXHn6vY",
  "key32": "4WGRhb3ZGZFZ5ZbBaxzMnwbUvNTctXJWgHgLWLD8U2bnXHYytFPUmhhnqzCqG4Ag4b1SAwfFjdZLgAVJzgEaSM22",
  "key33": "55xAAG1Rq9HvFzW48Jfb8E84iox4ZW8VYhPFVfzgtDdA5EFoyzx6xuhhcneGXeXxsXZyaU37G6Wbkmy4ExBYunqD",
  "key34": "2tRX68ZpyMkSW9uY6aADJL5fbgooYZ6CRBf8hry1EnSPfn5k2KauMaeEHQSF15EpGuvNwM41RSjFH4mprcV4s33u",
  "key35": "4TW8TxinfLEhRxNgSyj5WZo5xoGcAd3W8xe1a89pusfo3XnKFP8p4VpmNoJreviNashaSdGKYuNk4p5XDV2qEKVM",
  "key36": "43bKD66L6ZYmNJRQiKuDrrY2Mpyj1qHQxb2PPNkDBGsgKYcYUCWHPkQHUkkgFrmMaG9rhxnpvQ6zeXDFoPs9WEUM",
  "key37": "3w1k4QQScVd8BM3BdAyLh8sbzYMv53rDLmQFapg18MR68h16qfgM9hBKxTQQ9XWSzT4An2uu3fxgLobk58ZTHhQk",
  "key38": "3oBQL1cYu2hTjjQZ1dFcuyy2LUFHykBpUP371M5ECmMLqSAie8b7P1sSMpdx8ZdB98XDQoJfuNUokBacbxnCEJ3L",
  "key39": "L5xFZUd25uGVyjoRtGJELxdkicCJZPbbafCNRrKj88rW4JmMXep9QgFX7aDfAzpudyLLYzVNV2NCnPDiQmWd1gz",
  "key40": "qxGV54NhdabE4QuWafuu4Mo6XKcmJUSNkhER98YZKeEhzmEh3eWRfZPZjCVzVmxg8viF6rtEt35FvtynK2JedD6",
  "key41": "5SNaKq1iSFkrA5bWf7baFF9L8GqqXsT7WPx8KzHsebTv7VnKqdjrHTwLxdn2nnFHFpds9eiTXbxPxYsw2Fz88gXt",
  "key42": "4L1drxRm8zkGGh2EfvqaeixKS999CY3S4U8f87Frt4uNpxd84HgP7GTxaQGSpE4DF9cSfK3VrwaffrvQDKEmEmbh",
  "key43": "4MSbr3fNKkr9YLJnVuMDwCkYA8UUob56HCY2pT726yhCAof5VPnwpCZTyHQgMhTGUR8Ej76oJww5dhDr7yx4UpeT",
  "key44": "5TMv22JTQ64MLkcYpK2U91R1fCEDRqDs79ZxWjHkjgCXxpGTN94Uw4TmU1r1yJ9SeMZcvEE5ihx6ZYFxqM1Pdpjz",
  "key45": "DCLBp7QtLt6VMNWkMmmQwqWhXgTERWueArZzsrpaARsSMbxrJr7iCJ36jt94sqoUDpxHC23be6k49erAxcyLfxt",
  "key46": "nxQ6Vv8yCHoXhs9VuuN5CRGLjYzjgXxSU4suNxZQs2oxZDAcApeWzTJwqFwykeR5L3qQsEZmZ5BCu3y7p9xgM6g",
  "key47": "67kAQ7xUfjPpTrrkoMc6u2VaPuFoAAVv2CcEAtf9wfCsth9RrVPJohFQ5Bz8pb1P2CqHybp2zd4zYMyNVC63VUDG"
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
