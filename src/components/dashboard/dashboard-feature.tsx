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
    "4AknZTmbQTU5faWsuqjwJE8YLbMuDLfXKGTpwxdR2XKxz7pMQfG7UV7JfYsBtP1ciKJiSt7dZ1w4Tuz3sPjZEHr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCdT1ttYUCtVdaQfctJ4YShDBuJDL3jN4Zqmr3fD7DRHE6xFaYZ3tpoP6hvH6EHdSzJVScg5m2wUP72TKw2Gtph",
  "key1": "677aARt2L4scYiV6DFzwwYTBhQ1fxjninJXd5kShEyEPtTQVXwxnCjVxvDwVSLNyRCUWnNU6ueKWczHEeNJoGf85",
  "key2": "2ZNusSLVJBTXnCx2UrY9NJsETLAGZvpyLorMNktuqkcnfvATYef1u2Zbv9LovDewYTKMC3WJDzGHdcVy1s15a6mx",
  "key3": "4zAvZ3krbFsXghfXyMZbWFyn9a2ougngzWjhuEJzzKFMnJjnX2WosK5uhLBChqkMXgqYuvq5oQsPXwUSwUukaxYS",
  "key4": "5fWibPKvKXgwL4ipU215k1TdhmwewRJ5PbndTN6oSZ2FBUUxSUSfQkJeDpx3NyBHvPZyzcyYRf5TaMWA7EbhXBvn",
  "key5": "4Vrp92Fqy9WEqo9TTMxVHrCm8dogTtnTs3wcXZEZo8xbELF9yDNHu4TJYsyyA4moLMk1yALoQXY9Nd8o47qfkLH1",
  "key6": "4rLWHzZyUYPcGcGxFAszeywBe1LNrKxGhftDoakBdEdthSjGbZvLbTC18DmcrL3Ge2agSAeKc8sNxG2MgDAYcZVx",
  "key7": "hj6K7hCKf6CsWnTZwn9nRuNrgzMxZ5yyqtw3e9rTwNkPGjzz6inKei48srsU9E5ihD7EyCG4yiKPbX1rvU8RQTX",
  "key8": "2SUibpAHdQ2DJ13Joy6XbmZMWYd4ct3S7vwareWEjRp84hMJtbwPEi8PpoV5JYY1U5F6QuJSgjoH6owKPgDookYC",
  "key9": "3iopjXZJVBydkGo51cB7r9K9cWwuZ9Cc1J6jxLZyB3YZetCnR5aG47yrg56tipjRd2sBwWJh5F1uQqRiXqHRHUyR",
  "key10": "22Sz7HYF9Vdb5XeosF8bHtBEAYnnXzEgnjauz6UVZfFydtGE4SVdYrzYE17FvwAY6o4ZDqCGvAcyJGKTHUQufNbP",
  "key11": "3VvFw2uqToSgn5aSYGsPA4Ng8jutwBs7aE3xtPUw3y1KjfwnPXXAnH94dgSMgzyTqEsmpXWLbsT61h79SAP5JirW",
  "key12": "5JuPG1KhPbHrzUcYGZAu34gNzB2gfH4NwD3w6mgn1HQbZi17oacsQ3EeK3e2A44SeE7G1GxdjqeSh3MqioL2f5SH",
  "key13": "2jWgCNWvneitAgnNsvt6FPoq1armLAxgaayDD3H8fXUh7onkqbEchvRYemTz2Ea3fkuCvpMjvRA2zybwRdQ47Gr",
  "key14": "2VoKcXzXJVVLoJ6hXD8dTPyfkgtmQvx7XdFAjYHaCcEKV6ef3zcdg7R6ELHNE1NpNtfKPdEuCp13WzsrbnPJahft",
  "key15": "2dSBsT9AUTakP8fXYmBuChGPYRPKwoqdG7HSVtYcfpT4mnQGLhbqgQMBysYCAAskN9qxhXuPrAkKSwppkFW1G1HN",
  "key16": "58XMf6bM78HV8eDqRboGxTmSeBK4SNd8yQh5cBBs1i5EUbxGPrREhBbd8AgkMHxNcRNSMCQbnkJDZ4eAwSspnpPt",
  "key17": "4S5NrXgsrNvcoy5HHKGKhcebwaUsqrAZfZgAQD2WZjzmhLKQVVJYmFJVbCQsK2SpaUEYfJBpWyPGD37zS6ziG7RC",
  "key18": "3ogPCDFLhgqfMAdUXYbLVGWnFKYdujHjHqd6Y1e4uVQLTUJfwWgGqfJNhqhQn7jEjFgRWxCs1sZHyZrEdtyx3sKw",
  "key19": "4mPap5yKFA6TqopWm1feTuDsRLHY9NofuUzQ64UvPShKeCgLyx4cttEJFUMDkLuresbJ1dr4Ae1iGCXwvqy2DzcB",
  "key20": "2okzQm2M6nuZv24X45ZBsVp1aedNTQRYxgS7N76LAahX8Tp5KsULxXX2dSKGBje7rnNHmTeS9X8adsehiHuiRTxP",
  "key21": "5HjSJH5whubkueV3X8DmS3eqPzsV2BbCg9t1F53cSKhzNyxNbfTrWMDMWV8FZxkFyQJ94sJMxJ7rtDQgtXCAkGj1",
  "key22": "37WGky3JKULqtpppEifTzxNUKPCireHjsmrX7EmY6bDcXzcGFyen67qfCFg3n4JWtzJtJH4gve9ktDwd1S6Dh3Nk",
  "key23": "3a5tnX3CYN4B7VndBU8SXx5ifBcntW5BykA4649zpdSBusSpTzadEazDLzWbtKsc9QmoNogWxfKUNag5hyoPCs1E",
  "key24": "A2tjtWabCUva9A7dzvj2SkGMPmgga3eNEcwpEANhrSU5F2fTB8ruLQMQJiggjF8iPzXMY5vDSJueFvRFe5u84uG",
  "key25": "HZK7sWRacyP4gstWAEC469KQXKrfn8rCNKZJFF5Scrd1SQGegHbYF7ufJrLuKSeekZMdRYjUNvEAzoa8o6aiMRT",
  "key26": "56VZ7dwrB3EgkSMs4gmEgPS8yh4L233C3qGztwYNDeRRjxFht8D7HRR8hpMVZ2D8GLm6f5Xq95u5SjqQny78KMhF",
  "key27": "5tP7CNYMQ65w6wVjVqg9WqsY339xFUUKUVFPUvnBBG2qTCLvQQFqkFaRojQqasSzoMgrr6bu4cSXxnMqUKBHKCen",
  "key28": "4fxjiusH67AcNK8U7jA2vekN52XD8nFMNdBRgxfaZkQapCMHaqyo6gYz6yB3fmACAVyRJy5ryyxgUiQBR7WXYffb",
  "key29": "5D7WmikLbL83RUNDYdzRZYcUajkMueLgJ1MRG6XmaVxNc4eqwFLk52fyiKhcUQTGM8ZSBDSkUikx2MLqmd7UsYQD",
  "key30": "5MvQtc8cRwfMYGWTPT5HJVqBGp5zKPW5nKeShFD1o1taJMwVcVdznfxbKXx4bWFH3s9BUpbvV5eEjmMUTiSSYAux",
  "key31": "3Yc6jQwDfGNPmLqqibxVqmGxTLDfm7uNTQRg3PYRfD1ZLBp1cZWe5oXLVvCsuoFWfzhZ9x5vqURSd8bBu3Y4VBzj",
  "key32": "4ZDsYAUwMsR9qha65zmpT74wBkLtQqd8rviCZokfZLBW9e8f3AtdGpUChgUoUXnFyikkrJb9euNHH33hbuo38oL7",
  "key33": "3csMAxfjGa21fdFwm54kGefMaT8YQMkWUaHKHYLBCL3YKqhZx6LsCWAAMgVfRDJNnivnN7PsNXyBu7LvJpP7Q6tT",
  "key34": "32bnHrMtqVjDVX8Go3AFSueUfego9ATTw1upwRxJXFgx4Wc35552CznA7YVwqbWpGcnt6ctcx6R5uZKKgpLs95Th",
  "key35": "3bdF7ggNi57wVFhZtsCym8hJuymnP31NudoVbsaG21ic2aYMjLxBHqyAa4c2KJuqdsPkcP6Mrgym36EPrrAnpfkD",
  "key36": "5FDKhcNkGYtVQYTpAQpw1y8nPLzDVTPxKyPyVnMwkXPeD2BisCDgGVdNgkKMpw6bz2Vkrv8oAcTK4Bzs8MTCMt6w",
  "key37": "4sor2MEsEAx1rnVX2nuBuxaozMU9kR1qAqTVRWTJpkHVCG8ijKGcDDErWwimfY7UxtEtYf2N9xRsGKMmkGDxxiPf",
  "key38": "zZLXYWTteGzPzgnEmfxV6Hv5ZwNGLn72oYUqqTQPYk7iNGnY8fbNcDgns1UqTaeXRyWgQEU54T1Y8HEzxmcq4dv",
  "key39": "4Ht531bcL7DU2APxT2PnYRVZYNEMgFaVwoxmvNHWbnH9yo14BtdQ8bT1zEVeK8vsdwv8vatAh1k82sXiPWQKmbHo",
  "key40": "5uqusgRbpDGtCsBDguLbp6WWFfk59bjP8XN1bjyjd8HAXAZ2cZvPdA44q9m6zNjv7aKQ7Cfn2YrwQtxpncWrqdRv"
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
