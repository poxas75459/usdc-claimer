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
    "37XZStE8RHkVhRi56tsLpnfqLscbBrb1qrixBcJTtLfyXqhP56nqxm7WcX9YDaXo789HBzjdLnG364TqjpNFW9NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eu5hHmZucd3K5MuhJcFysbLigqS5nqKwn9EJuVyChXpu33a3F4KNbcC5sWa1GCGw3YZyNwPve8qNc2eGWKUkrj9",
  "key1": "3fhW1wbZXGgKiLrzAHrCgD8tbeqCHMWkehK6tuNbezRQ8QEpLfivvogxySytrELb8aiTiNoQ5TWjJPyGQdnPv98d",
  "key2": "4N8v53mXDMMGqLVD9ZLa6RybejydHcqcDJUeGvkezyWdhyd7ZBSQwHdnAHmq8UBe68ETwrdMxnnP2MnTNdtJbXDN",
  "key3": "5MzRWAfB2odAtTTRurRibT8NRRSSmK3UGvgjgFnKhVDUuU1gxbeYtMKyVwn88xxSHLbkviBDsGWerYHkrWtNgL47",
  "key4": "45kuBPmSFbmhdBR8TBuhjaHF9ipHahd2w7V76wy2GcGyMvjLjcBiAeDUiKyeXy9mzpAZBaEHJDPRG9uRdQyjaQoh",
  "key5": "2VAnTeKGXAgh7zyXQNFnrs5GgkNYuhyMJNKQEeqc2Rh8otcnHUVxMnMDYkZarewdX2TNLN1ohjzrRnZ5oAR1PAEf",
  "key6": "2PjF52XG9ELmX2qsLRgCQYNe2tHbPdP98UFcWPGKHmbFaHPJhNzhXoQAzwsmQpcNE68ocwCRspKgMk2D6WksJ5jq",
  "key7": "2UXmj3XPtLFVs8pazjsRMvSLaNWcXea2kDBZwDkuHerU3pNdsBK8xdSJzhB3913Nix5gsXdoDu7TKf3EMGjdbt3x",
  "key8": "2JfFtc9wWgxfcP1h64Eh6qeRNRhpc9CLaPsTxwCEhJ3nympjQxwgGHthnzQ74PDsidpWySh9mcGzytUWw8tW6cMA",
  "key9": "4KXtbuG3vJ78mqKSBogjvLsfLbNxc6AvJt6GMfsYg6PCqm8cDcVHEMm158YYSctBdA3j9PDq9i3MRZtT5b5MkDuF",
  "key10": "3BYQ98zGXapwyQLchYEcbtwdtrD4xK7CzN1KrcDbS5QGj5L3QoKEXLd7D6Kj15waMWmjoyA3k35iBHKnVZPkx62V",
  "key11": "4BiTkq7uqyAQM6WJQ2Kvzh7ocBZwcWRaaGJAaufQqTfFF3KYtCdheVapX3JuPTXTf6xcHDcQUpY12nJceyf8P7sP",
  "key12": "5y78FTom4cCS1qZpgmvoiEyMRivQVWfnLxpgLRWr9Vmmf7Rw917LixymintWpP6iAtcphd58ifS2KyxeYUrXoTbP",
  "key13": "2LNrsKsGCAVJSCvCCHRiaTPFvqBs1nrBEzeWFRp8dmH7QwTxBwQsSz1b24KZRzhWVEzY4AUUnWHCXUYtjbywS8uZ",
  "key14": "3LcWC2P233C63XB4EL2JqY5y9wBCPWoA3rTp9K9ahAvYjyWaEcQwTLpsR8VDqyKM8yZn6fzdoD3NDJxqhzK2p8fW",
  "key15": "5Jkn4FUmVMLNGa39ZyGYrotJQVDnQAnz2jD38JR4QKBMLzchjAt25UytMB1CJamB5oUUQboLVwknc3txN9XMRbPd",
  "key16": "5NzjGLVmvdcXeiWXVdxUBf63jymo7f5PFenuRmw4fjnU8aUW6v4mZmPv7ZyVbdHURKbSYx3T4C5Cxi8WogjGcfXD",
  "key17": "4m9YkWdfaiyk2XHZ3KmDhpAN2sGNfMpuo9KqgB5XUa3E4svVqRD2P3drW5rXLJk4r1N9dBa4m71dnYjM16GSnsaw",
  "key18": "2XNEUiqSWB3wY2WbSwvZNxSRY2pzTXu72tW5Jus8D2BhE5Cs16BFsW8ZWF1X91KEPqE53C1YKTTVddiuYejdLQ8c",
  "key19": "4e6fvPb2nSNviXZjiFugYp3y1EVrR9TC2CNyf2zZfR6pSGRwbtZgtSWWABFFJ86JWKiC1PUXPRa7c6xtm4HGaDHu",
  "key20": "4zrGUT2Sivz8GMbC1zd6xoZ8ke3bpiUWaXjAraA86HruHCsjCB494KsZ3m26T2aY1bAsRC7NxwDftWxzqddQmGCP",
  "key21": "2VpvKJJjXCwv1tjLoWM9HzC9qergy68Gr95rbDzB88H5buNpdzVMcWWCjA22bQk1zDpjrwFgEPTu6QL8JAFkF4db",
  "key22": "2Cz2GBmCYJt7qkU2DTpMMSq7yoEgna6p5hfz5LuQHzFkyhvCA5SWyDBYx3zgmDJADZvppEA9fg3hX4XtDga7c8ct",
  "key23": "38b3tgLMZUFFowgYVogyJRAgKPKPJJDi8fBd5bzMWsY2yLpUDuWKA4LZ94fFEumzhvcu6fQoLmp82P14iwu87eER",
  "key24": "4HD9kXqzcsfc5uDZvFKWdg7j4duGxv5eB9WgQyPiovpTbXsEWhUKwR4Kk8CQ948h9kcNdNvY97ircQvcWSuokpBg",
  "key25": "3cCdb9a9rEQKGNw7JswBTjDZ7kjUmbZErwmkYU64f5urSfrLuFCY5pR3xu8s1KijTBysLL1FPHpPcE1rNeWdC5N5",
  "key26": "57U872TQ9gc16mYEfRhL6vEcDJAShKMme7RcpW43id5xFrjnz5v8h2u252gfU6FpL8eXNyBYCu16FZVjFbDmo59z",
  "key27": "23CjGSqFfbXFC7x8NpkAFoVpWDuzm4nEU1PaRZjcyLVZ8yputSbDoctBNwDQWmewNp1hgMrddweGEaX5189XqSYQ",
  "key28": "5gzfMCbcQDJkY43v8yhDEEzGhGHgsUn68czYuM2vV9y8KkPEGumGpW54WGbsUguFakFxoh5iafzL5FkStgQM1kVW",
  "key29": "62qXDyEGdRyG2YJFuB119q2hQjVNQzx2UMLJsUnnoTBu5i7HXiujysgqdZNSdXSu6BCJ7EiGwcHsKG4YJaxj4UKm",
  "key30": "4AWYCeDDq5aUmnLR5iQnEfdbXyHE33aqp5sWG8i8Mfx91SvH6RQL8o2fzLepRXoPT7Q9JxHxZft83n1w8DhhTgZk",
  "key31": "4Wdm57S9o9CwcpsGpFVNmy9xNTAap2ZuZWhRT8QCz8rExcjk27yuNyPPbe5fat1yUoC5wG2HFcNsX2orJMwB7isa",
  "key32": "2guNz8ckmjMFVSFuyfMvFQ4y9icdM2EZ9Ebgr3znCia1CTBRPUoPuTTD1jpMaAvezcMiUPWPDi4yowcZB9FJbMw9",
  "key33": "24VQtuyrF1DPL27svF1kdtyyaGtmSgWtNe46hYGb1MPUuTgsDjCqADrMFn6z8nkhzDVJnACTTPzPhzPf9ATdmHWL",
  "key34": "4VRpouwwzkTvy59akcRPJ1n5Rhwwx49wZSxVQvsxhMLZeRjmiUwtensApozQRdyfjjghU47tKHQcLrWAKNRX8zaB",
  "key35": "3o6DT3pNreKDhF6rbnu7xa6Dx6YuzGhvaFRE9bDWcDawaSgFqkaFxdaXJx25v5DK18cM5mLEoPidebHYZH2KGbDo",
  "key36": "4pfus3dLLv9XPDtymvDRCPGzZoCxSJMuqP7TzVwQHfHF5HzC9cgUQi9V754haxey3qC3a3HNK7gvJ58nZdduPJTn",
  "key37": "H7mvu8VJu3NvmvnVvfgeqvz6WxypfpnD1Ph1Dst8tPkD6HoaAk6qb1F3zNeQ4HmCrMMGe5yepjbne3utidJP8b1",
  "key38": "TbgN1sRkh5mMEWGqbs94CMWxp6Zam4LE9EFa1C5TfFF739knAnzbgLgMBMDhPt3ygC18H9yFrH1xoPfg5ey4waC",
  "key39": "xpxcU213m5JQHFvPy3ijtLs8YWACdvG8ofvW7QxsDBgCJLPEAkmHQyd6L2VtmXeqwzjykxVsofoWaaZaQUrpPws",
  "key40": "5MpgbkFvjbw2ZGxkenL7PSfgxmavtZsP2NiTUZt6mocSVoD7tBiQvc2Sa15kP2PMLaaBNFJ4V3ey8u4dAQZkDcTJ",
  "key41": "4SBuiTdfTRsw6EGu4Rv7jvP7uwTMWh9TXn9SH8Dc9o9tEM9rRZfFcN1UsbKNsgGpwt1iaWmWTg5a7qMny6eRAh1x",
  "key42": "5kLvvAenPJVNggFMEepwGYL75z9DVH7Z7hWbtsvwXeP2GkzfPWNGqViJ1yGYuh3HhzwSbRJpJxSjNP5yt4G3VNtH",
  "key43": "5RD4RzQXm8YNqpbMoyaqZbrov4f71Gc5CXuutoAatDttFn7SsUHbkRaWansKw7Vy29UnDMKtRebwdAiHXkDqsWDE"
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
