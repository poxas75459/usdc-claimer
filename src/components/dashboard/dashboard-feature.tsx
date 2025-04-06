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
    "5E24UVPnJYGkrfY81eXyYzfoBNmGWVputRPDWpWKh51rLYht7HpvRFHur8u5SJJht54mJ2uDU9zsbhe3Etu9EpTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wc47SbkftEe4oGxi2h1MhGb2aVPF2Fw7yYno9CVCbuurjB1Xh9RNcnpm2wAmxq1fJm95M3u7gkazSfSrsyfMqjt",
  "key1": "4qjRjHv68J4hahU64CE5UaEE7Yx2Kt6avKoqsKEvBQVQvfbpS4WQhca7PHxAxQE2DiV1yKVdkyCT3AxY2wia3dQB",
  "key2": "5U79npdms3wVqFmCHfZ22Gn5kSxZy6Q36MGfXwnsKEReQYrRAdmP6fc5Jz6VCqTLyCU7rRdHk5TiujtDcouUhQa3",
  "key3": "2AMMjGBCwm4HHDabscbyhvMTYQ3N8Qg1UZQ4fe7k8CLjw5UwLwU6FUeCvkezNMfJEkSMoPFu58RjtqLmpwqQHeZi",
  "key4": "3NymSb55iXLqpYcPkrTeZSD5kFmZi58EeLLJ6k91PehKWhbpBSP1N7fk1FFxD8SVgSbQMhKUcXXaoJ7tnGtzM2PB",
  "key5": "4Vky8KtsSo7X8GGfeERmfGWJtSbgttZSuoQ9F6ZVedwaNsaW4bYokJgNBqu3Aq9yJKYzqk5VxtbMpyBPKPdfthY3",
  "key6": "gxh6PWZUqrDt1AmxJG1bSHdAtx1ELkSAetEz41ftRDkDez5y1osqQqZtiE5jWvjqqEDCzLMna1zhWMaJWVMskbK",
  "key7": "2emXgHdMxAYgiWw8HALXoiSJp2egFSYEQVjg3rKPzBUZqv2ShPwCivhjxmchu978L3VX9CbchccrPFtAA8mVXQtS",
  "key8": "4yGi1QuTTURKZLMCUGSh23vwM5ifz1iHRdtoffvDyWe5Gj7pp5MAJdeZtGUQdAeTuxcF6cb6wMkKVUkvNyBWd9YH",
  "key9": "4gwhkExHZH2VmbAqEEurhDiT3F8NSLLrW6rvPZwFAVzH7J2BZWN5iBeq2EWb97WXdt9U4G4uwdDapP37fvx31LqQ",
  "key10": "4vGmdUpbzNeDqn6PtPxSvFN87g1tZWtUaS6QN5JGkhnNF3AcpvnJKwg5sBNQUxSGEAFhyfKqXYdWaYmzPvmKjUMJ",
  "key11": "VLp2Yhzxg3U8E3t2QnFPpuxc88CXMCmov6Zcgi35i6uKsjh8TBe5teCwiS3frVp7NGs8oghwQz2wH49gnJnYoje",
  "key12": "3GciEoLFgXCeP4d7V16CZS8CyPDztJ7AfM7ZYR49zcJTZ1N12nbKMVkbjJEgHfqUgYLRQ1f7Y4CjwyzKiRSZazgU",
  "key13": "qMXvJa11bZK8woBtTE9mUtnWJ9DmUnvngTfWSYszVhTVG7EQ7HYP7VpHGTMVoXuHhMRzxH3yKjWH4dTTDm151Fr",
  "key14": "5fQTs5YQFLV3vr13JfjpGVqxNMhYUDzMXNvZz1JyWtEE4iDJSSQ7vVr86DRuDNKefq445AaCio4zhbANvX95yy47",
  "key15": "5P7aVTTxULLvUDMoNk58cfJ2uwsmDqjJ9x3r3BjSAj8PGCe9sTFv9hn57MxWZHyNJsxAXsHaM3cwd92Y6CV8u9Pa",
  "key16": "3KUBoeL9UfRpoqTqaQffXZq4VWkCNVf3EFH5sq7KPNsDJAXguENNQY8tbKrgTb3M9xgaxSEzqGzRyQjwLjiNaBC8",
  "key17": "56kQNCtyQRJMGEpP89Pi8roEA6J2jnFigBxQpry6ZUDAJA21CvbmfTycmBN9jpvj4qW92oC61ZgmDXGFvhdeZFVg",
  "key18": "2Gfg44DXWnDaYKLZhhPPcoWNNGasE61tPes3XU8cwAbqrH9Mant6F6XpHBg7jgBocinaCdoNM72eg1DYNrNVpnpL",
  "key19": "43mSGSZzdPJHBrwY5ipdMFvSA9PxeA467ZeJhkzkw2gquaaUSaaUB4r97e4JfPpijb8h4k4oYKYy7PNtCyHDcLk8",
  "key20": "222wvUmdAyqmsohGuqeMFvQuLwX5jKvotWZJWafba9QvLDhcyFig19g7R4C1Yu2FVHp3Noe9GvzdrJ2vocX7xNPu",
  "key21": "i3kcCGkMsxxHVnLwJ47opqa4sjsRMct5Bf6oJVeNdsDbxNtomp2YRTbCSnFxxEdjdJcVMPjsrV7tntEgaTv5z1f",
  "key22": "38CCydfrMtaKXdsT6ukPDo1QhNyBRhdZEEUBEpWRY3URVTYZQE4TYARrwrpbJcR7fW96wQhpnz7aPKCvBkKRu4em",
  "key23": "Lifsw89RV2RYNderqsdWFcaAqq3mob7U2xy86iULEuhuzuoBAyhJAVa7AhXGEX6uSg8QNQuXKSpA3rkuZgudzsw",
  "key24": "22xnXHQjL5PTqGEACfVKG2jQnuf67PVBzyNsWSwtTvjuUZKoemxUm1ucsWyV66ChwVswAq8aMhFG3gYfb6f9GbEF",
  "key25": "2Zgo3e5vD9F3qLos8pZk9nC1hPYr7pLdTpS38h2eUcMmPsHAdi3eZgJgBipq9uNSmV8gXbnpoLkpKvNDYkz6mb74",
  "key26": "534G4KBJ8CJVJYdcJd2TWCntkFAf7MdttvskueruXqu23hPz2gtEmsDKJK9vN2MtQq6waRHCRe5fCSx2vxmGSnuC",
  "key27": "3LnQttep3zdT4wUuRq5pNVLoA56fgoU6YWvkUpK7cpVQSRSNWMLtjukpJ4ZGmUqvLbocMHoKtrJxpzcyjstiMScP",
  "key28": "4MKj27eEdFLacnCnfRC5B6AeC58HeaRxG9GRs4fYCp81Bd7wnELt1UB7Yy2LGxfNsXDcNGjDcvHGPb8WppSv48sv",
  "key29": "3KXwp3TGbXevGoeBtDP8bfj8srpc8HRPFpa7CJeaEHnN4f8gvNR7Ymp7oA5hrzQwpm4KQGQkcaqXSsBLCrRaABaU",
  "key30": "55YGGYhsPgA7CKrut7m9kq9twemT91o6qVkW64BHUHJJyvFLde1H19AyikqNuk61326ftJnDcKQLegTrsFuFmCKH",
  "key31": "5xQCMyrPe7wSNkcZYPQT24SePy1uB6hgDsR1MHXWKfpiq3k2AjqeMjzBuwFMgEegPYtrFLbD2pgKMMynw3PbfSeH",
  "key32": "4Ek775cbusErz1FjfNyrgEYNAhsjwRMttJLSSJNE4R8nrEj7i8onMsjKM4fbzLpjWGaRYSfNKeKZiFuiErcDymzC",
  "key33": "3Cwv73jaCq2S5VN3mhr8ua9vcTxr2PQXdqfJ9utAuqE3zCm3YBxfccUGK5niiQzTYaC1ieojMWJZM4V1eBDAf2m2",
  "key34": "5zusn4WnzEqcdjihvndR3o6m9pDGhkYAYMFVwhkNsssQj9iyvpgH7UqiavWdzfQzwjKK9Vo2Ap6159zP4GDGBKdp",
  "key35": "4BhWwx5P8aoo4X4ntDxksxNQHyuj2dNHFV887hVR2s7LEbqt7RYBmTRv1EHPCuPfqoNopJRuo79TpMKnuhDfFxkC",
  "key36": "3Se8St61d59N6CkyTrGnSL3aW6osaXvT5WiphgcHmGLDPXPGeQhi5u8qqE7XYiGj4R8PA7nmh5PUUMxuzm2TcRQn",
  "key37": "31K7zfwHXpWVcthe1EuEFUHZ1bKmYXnJKMkbCMNNyUdCVHWa8szKbrHVxYNrGC5tj2cdr9HSztFKsmB5EDMPNTvR",
  "key38": "5KKRqyrwWK3iKToo75iAe79B2nVhc4iXoL4NuNbhqLrvbJMBtHf2pM4phSk5fPMR32HdjVeG8r1qaA1Pf1c3oum3",
  "key39": "xHCXRdZBf2bisNNpJ9YjezZCFok1RN9UjTAx8vNWTnbuNaBveKWohF1jHTRktpvFkyS6WtbVn3ddHDooUL8oz72",
  "key40": "3qr4FkDfLnmWh8ZT8hXj7ptzmfXMKpTz1aRfbrbwRZC4zS1Rq1VvW8CMkhTbC32ujumEX4Db9Xj6ks2p15fcU7JV",
  "key41": "ZT2AomUnrj2AU1iEjwNauHXcMF3V1dcdNF9TSEN8CCRYqwpJbrhfMvRiiH3nA3o6aekRZjr6XPRiEc1dST6LXDm"
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
