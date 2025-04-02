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
    "5YngbePpHj9TMxZ3LJZLKfvvUSMLGWKt5NEGLbUmL1XnHP6EFYYhPheYqXWbMuHBTzbyjLvWHMffBGyaVtMnDnua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpjABT8DXfPqb8mKqZ67E2qtsKkj3YJKvrnnUCtuyPz3s5bsprgT3eARYwvX8A2QinBxtdAHheHLqSXjakfanjH",
  "key1": "4grvc9PC8tkYMZ5ubxocsSU9XPoiKb5xQFSFCo9ZeczjmhBZfW9isgi2otpitwK9u5VR2wbUaW23FAZsLZMUUsSb",
  "key2": "6oQ79gdGTD2DuTnVVVDJ672cunvpHfsFSxm4y1j2DsJMKDjhSH7ANWgzuft4isECEYS2r24zDywRcPDR37kQC2H",
  "key3": "2aMstSaMGAsYtwPQzhgxAvtd5vJ61ZhdhaSbFrzoRsLehoQ3DfYK2KKEpkqyd2g8yG7nPcP9ABz7bk2fvpPGw4EM",
  "key4": "2ExDFRCYh1yQDm3drY9ywsMNcRYSgsM9RztPP2KvaRpPGqjvb8Tdc7YvDVbM1UwWHVGcF72iJosE3naazaM26TF5",
  "key5": "2Z54RrY3d31HqBrxZBZXavzPVui72EqAkvtt4nkXWafHrcguNqJv6A4pau62hHDarmz6LCvRtNBdsjZRV11FqgAY",
  "key6": "2dv91MTeRw24wedUTZQjHg5qCg17yktaVq2ohgwxSxfETBk7AAejyAZ5isHmEKvHXcH3Dts8XoiCD2Lyjwos5xby",
  "key7": "2WEcmcVGaqGDGvS11fyyiPPY1Jpiw48y1422duebKDx6uen3kGnxVogpSfHPjufkQfdfeywc9Mbeo5NExC7m3HE4",
  "key8": "622hYb94aRYpBx9QCRS4rDAHotW3FF9UCuqf8iaegy6dgnuf1vv3o5yh1uSvfu4FWWkWJa3Dk3J7p1CepfnvsNui",
  "key9": "282BsJRdS4JVhiuTNSPoPAauTvwN5BQgY4WCm33VLoSGAbe8CGfYfMx3cKaLxhCCf5dbo1FjKJ5eMwJ95Cs7W7Da",
  "key10": "hpQzqUhy9hsJzFDms4o4tgKx7jmGUevi7dJ1ecX5iqpsRcz2ZGikM3519pZA9NcyS7MuSkYr4nNyx1LBz9cQ3Pg",
  "key11": "jDe6DkwPD6nbm2SJ5UEDGZ7jxZTer9GGTVBEMNZLGDenZKcCPUQUx4JuERUZJgfMEQjnrZiQNJZ2ERWDHKgXQgq",
  "key12": "5rzsK3UmUQaZN1M3C5gcU7cL79XSJKRVQv6k4EDsmt1oQScAsbcp2AtcupopCppteAtsMGiKZ9BQ7FsJAMWuJMYW",
  "key13": "4fc4AUYS7ABrmEd1njck9pmHyqeatbxB9t9n6M54tcHkewtjVzci4UzgHDfZrRhaYix4n2ALqBaqSJh1sHuod9Jd",
  "key14": "5pjtRtXhiUwaeYVZHeMhNKfmNyL7piHTzcFi1noAq6zKtZjJfVAVS4nJDLUJu3PaLQMB1LTsQuDqPSV9aoZPm7Xc",
  "key15": "5GR5BTDuFNcm1EiM93UiMnG1uoN7pVreekHPvwtvfmgNAw96woBPJeK3bKRVTpT3vfnk9pCqzfWGWx2tZa8gVf8Y",
  "key16": "65APefRr9KvnkPLZTFqWWaac8zgnBT5TsHvsDxVJcmpnSyoHoaLSommZ87T3GNYDxM8hM1kyEohBzEoez9zPQUr6",
  "key17": "5sJWhYT2BQzcj5HRAELkrhuRJYtnYDMenyRb8KBurYiWpTKJGrM5eE26yRQCYkV5j5mQnaSNShxFZ4oGmwiFpT9o",
  "key18": "2Y6bYRox8LxDb6QdcpXCzKZd4JKL4muDEmf2EwWMvvzZKGTTeCpNjNfuCwr7mhZxfYmfYBbCgfRF4dShxf1zjaGv",
  "key19": "4soqH1oXzNxvsMNBLif9DLQUpxmLYxyg2qN3U2yK2H3wnC1nrGL9Zv5jAEAmVbBvCDRnzZe1F6xuisMJoozuQJzc",
  "key20": "3pXyUcPnc8dvg6F8beyRYbxS3z8Uzk92j3ZcnPcaTmza5hurxgqX6zrd2ZbS3Vbca6gb5fZmAK37bDZBonf8ZJVm",
  "key21": "2f6JhfYmFii7bzTbCXaM3wCwhSjvbMeskeeSimiTqKiG7gc2GGQR2KgVQdhjLPGP8aC8Kdi1awZNJWWRCC48JG5o",
  "key22": "5vNXVKYovaUJ9piMbbWZMarBDUVv675sp9oBksGiUSfpVa1FpU8YHwgXYdnP6C327iL6E1WecfWxD2BLYitx6Hn5",
  "key23": "3aJbws8RtCNHQFHBnaWXw8rEEszbJp1PMS1zMEy2V5uQj1vuERijh2qGYgJbURALdAto7zNmmmqSU1vEtGPaFQ65",
  "key24": "5k1xd882ue1V9aSmK7vWbdhqpFXS9N1NJbXv2V2HP6ZS2wSnqopyKkZuCS558FpEeu8UvWEiMSKyj98kFkoS5sVb",
  "key25": "5DoBhEYJ3H6TY146mBZExvpHtUPkuhTashZUvdvSYQ3JuMUwP6U2JLsoswPzchBGh3RqAXSnHNkABLtvBXth5AAh",
  "key26": "3kHAwjfocyeAx7BMkpzowYa1ZPjiZ2AU1Lkcf7AMW1kZmb7mB9hryiBE94B4pLhVWkVxy5JojKKWLYgZfiRsPyZv",
  "key27": "HDNFasxuHCCqDLjdpJURBwhkYPaxFerUdgBrhUxy7LZpzMdb16pVbx6KES1DBkM529YxgCTSS1ZPYfRvd1HGzSG",
  "key28": "GJt5fyp4szuwGT4BSkX15GbMjCKR2qDpbhhkuX4puDe3u6eBYvwr6VNEDFWK3ybZQLvqyksQaqbMyWDwsAoLviY",
  "key29": "4kHeFJSrtpyTcro4VXeZYjXQwg5SsJyth8HxEWLyGahN9qHpcD7vWKfjTVtV2TKNH76DhHXRDFpxw11qJD7nHVsV"
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
