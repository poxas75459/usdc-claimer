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
    "2qfTUmQjSZHcNUNpkkb48X13Rg28mgwoLXxVrQ8CA8z8PN9xNfxrSYoSWyLfe5xwtPc3Udwsd9GcpptViUsa1xwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2okvJvKRDpK7sfx9DwVqXdDnDTrhBV4SPyajxuzRMD7vAdsuRabifhxwX3RqMtPNYR2ovmfXDchRBpbXyV2VdL",
  "key1": "3ds6K7LEuZej11GXGhiAxFE9Z13wE3YQ3TaZvdJVvCNNi737Zo4jQ9wudsVAguc1ijSYia1A6YxdfhdzZ4nBEt6y",
  "key2": "5qREpaBDz7Qg7HvBwDknHniqj6aiAd6dYryKPCU2ptgpu6C7YTPDzzBLA9FsrzzsHaNZCAvu1Rjax2S85aTcGTrJ",
  "key3": "4RjQx1BPbJm1nyrseZCXeuZ2FF2vXmgSFm4qKNiShk2W5bvbdvkwswgaDtan1qcT4EozdaCcCEMTjq4ikKudMADn",
  "key4": "zVMK4BAt7YDk7MRncGRmbMLVqduFv23mD73zKwjZNJ4haYBAEFvc3dEziN6chEbDiTGfKRuMgzZgfDR9xHt9jnd",
  "key5": "2Kdgw75aZxCdkLzfEpvCbn4anxm9QfuozTzAyDYP2wV8V846UjUhYtqMHMXYxyW64zBnij3SwA6rLLtbu9B7yGwe",
  "key6": "676kYfDAJd2MLSKDF2H94h2UwTRvpdKgnkPh25fDt9RE97wjSEUVhd3HZ8Q538J25Vx7LccisjiKkEzCL71r9pA3",
  "key7": "2fkfZMb2ChHkULtc2rgWkFU4NHX9XYhvCFxmfw9Gp3idFEbwAMYrx6SXLxtUsSwq9texJC2Qd2JcFbPq2gLFvkPU",
  "key8": "3u8dfbLTYWsbQRoEfx8fNBW5NAo2XxgJd5bdStug7V7a2voHJwFUCJi5RMUVn8BWdqm4SYCYfCuRQR87Bcunjgvs",
  "key9": "4f5tXFDVtxZhouEcD2vzi1FyZeeL9t1KLVXfdJCk9bLELRSGFK5VSuC1ET2X928DYRsHkrpt7eXsGC2BASVPZLk",
  "key10": "4GpjWi6Ceb8bdn4soh5daXMoBDJhbkXsaftzJykTyeLwcko6wpq58Qq1pwxroZgy7RHs5nqcp3MM7J4c9tDXkNuY",
  "key11": "62UhH3nRyz9TmjjLdgpHMfdVRDYjMK8F8mTtmFsU5nRH2pZYZto3kCFbhRssgeZ61w8wJDYnjhhvNE6TPWqKySSW",
  "key12": "4Zxki66bx1Da2rwcNjozwqefbzR6aLjPF8sDcvSTvRRpW7vKiFo1TtbbnCJgMW9rXkfhcvWrNYfmQZ4XvFYHmX21",
  "key13": "2rHapGrbzoxNYCsVPfgVcyvJLJD7Wu2KFaaGzBEi1zpjNNXcZ6MAp26ab876UuDGym7Pkh6ahg17GdBnmLGCTRvR",
  "key14": "bTjtBYyZ76Nciwy9neE9yYEg6rwBgswQ17JEgMxWkiW5Yi12akDWbSVdvHhjGCrNM99jcbim9PsoYa5Ta79tez3",
  "key15": "5Ddj3i6ve55p4gw2Pg36vACT99KFVZPmKZQcWARwa7fk5wATmjYNR9WA9wbeSdgmjQpJFmNcJA4tgJWC5PGCTvXC",
  "key16": "2Xj43LyEBwaEVYZgh8yvBGSipv84X1bt8DBCNx73ihdY5RRMFZEH7ripkvhiGRwhcowGrJC5qXNGDRQmnRTxktTa",
  "key17": "5HyVcUzGH9kTnTnjUfMqHvxmZD4wJDNJ21s7EFWMHQnnyB8RAfXPvYp8xHT3zCd7np4pFormt6Mt1eYQUazSfXnW",
  "key18": "jrC1iBFzvU9gxonurf33uUJVX63FrjWJBi6fYpkCTo6L5GNHUv2VpkeDrhngcFJjsL6qcDSbfS4g3BiFEFny71J",
  "key19": "wxVf1tjJbNueH2jMHdJzCgcKBabfLG9iuXjFZp83P9MgydMfuPZghTiqPct2uPobd8cKRQysfgmUvgq5CoAvgiE",
  "key20": "5b3k1cY5iJ2Z8bY43d3Nig8RofdCsvQyxp2sbueJtkisrx8fHASEn1VnLEAdSSY7kShie8H8FheQcvcwmtH8yjTp",
  "key21": "4YzSvghtXAaDjV6UvPAfaz4mR5RZBgsPHfnyzaXenCSWaNgV3eZuaiy5nwt1MFcXivzVHJhei4Pu2p4od8M4N5cq",
  "key22": "4VPewWSRsqGNqvxg7eSCBoax4QugbPyowQzjDYBrzeBPhmoaF6vFp6bRQgYcrZgMf9WM2H9tAqETLPsGWD411uYR",
  "key23": "64J7ZU7vT6VBSh7b5Bbyn9wBf3PgNWBYTXLxuMWHQ3kQD9eUz8GfLerfqWYU6aGCjG8VKszdr7kKb9roLBWfgK9G",
  "key24": "2vfdhEMXpMJqGmW4jDDpwJuisAhzB9qcjB3GoJCCmnMmm6mYRLTDAKMPnVoD44hGKTjdiQrtDecBsrcN1UGJYyZs",
  "key25": "5mBRxeSgCxGQxYHjTtWqPsdwcqzWfqAJyVQY6iPtyRS4Kv7ic5omNSJNRGV6z3a6FgtbeV49z5Y2EcB1vYHZEZ5v",
  "key26": "2ZYMexFAq2HsE4a8YVbgpwgAfXbvsZgmxb6T8kXU1SU69QCw7bxHHhooCgcjLF2ApkHjChdxEmsgjReV3HUCPcAC",
  "key27": "4w38itdBS6XoQqrB87exq5hdgiauJnS1ErWSwFAjD5afKLtWGm2qvq4ge6GQqLwtxGzp3TDXXGdRVwmdh42RVaWj",
  "key28": "3MbQoL83rEAqxEjjLgQCz2QKYaBHwB2tC8PzQMwok2z644JvAufwZ1ShpxR61xnxS3VtyFim5WgzM8C2oFZnyd3w"
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
