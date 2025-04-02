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
    "GBApSSVCSpNgqMpVRxLZStbhgvewwvCuFRHAHwL7UYLBgLLyACeDqGjv45k7d22CAYjHgvMmQL4GFcxWY8vwdnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523PnabD6XMLduWnKeMDKGQy6ZADSvM2xyAYYLuWozctrifxFYLzftqMpTq8boRJNZxfFpXd3gtEGKWPQStQtN8H",
  "key1": "5fugTcpqdwFPcTKxPFGSxy8HvXdmGbsKQLXv4hneWn2RktyC2J1XFVaRCqdmXnRUYT5weph41xWM99Yf28Fkf53C",
  "key2": "2atciNnTCanpFbtVNMrv4b5papUe3jYz4iguhZm8omHz3XAznjHbRdaRwoACYi8gp3GGrzci5BLfKgGk3S76JiuE",
  "key3": "G4Dny5XpoVD8pYvuFQ16TmqnUUNChMoipSVwoHHQxUAs3sNidNXueyWcTtnTN7bC5TG6H77wYd3ZoRUUXbLr1Pp",
  "key4": "5bLdg6p6rQfxqYphYwLBuuHcMqQqq5bQR6CWS17exZwNK4nH1digg84g9k6ZtbigHe9amPwiafMKnosHAYzZEwKe",
  "key5": "58DVKKJ36WpFNXT1txpYmWG66CampPRVWEyCJQ1Kppwi2UKWuXmfH8YPARH8QT2X8tuR5ZqgfDrjVsoc5kLC8AB4",
  "key6": "41WXasHNL97iNoFSkdhMqwoRuWnJJ1PR2WBoJP1YsqHiPCko29eiQdQheHCjbenuJ1Bqu6wwdnFFM5o35cWid2Qz",
  "key7": "25BsG5SXVff6LRJ2t1Dx7jHJdyS1NMrbqK95rGyMqCgXRnYss6E9ALfPZQqR9yyeu6Xcy5HcLwGTfA5gtFA4eJiK",
  "key8": "4GtLecnFM3iAxWjjfMEZaVJhDQhTZLk7NfSTEkYs1Q5NtuE5UwUnD5oXqzjobHP7UmDHWHpA12a6LJav8yMEZLm",
  "key9": "v1uMgSLqVvaorzKzynA5o2gyvjw6vLKmx59n5QHkpUQpd4iSNm5LNEpDiXQU2zoKKnZXJbYGXP9WxGjXUH91vhZ",
  "key10": "5DDHAFc4dN2BmPEQHFy6DXUqMTaRvXwo5pfKA57zjk7DzKS7VVrWASo64mKYaD8iXMDoTmxsrGthc1D2zvVU2pR",
  "key11": "3HBroMvvEgWKUE4mLQXWjpHXafKE5F3b2K4ZRmjaA2qNnZdP6cDqr3LeF7R9bDh6RpzwYZWhcmAESNhZCdG2LnQ7",
  "key12": "67Z3jxvAZvUE1iWPbJnJG8c33PEA8Rb7abiztoNn6P6wCoF7bE5pEWouw7R5qDSWKLrLVmR4G8wJR8aHu5WMq2Ah",
  "key13": "9quwzXjmjAzvbqU1srEMqrV9ndzdRDQMHCMXZewem4EuSXmBkSJsqtLyx2n3DzMyeN3RpMeasZY6DEg1G7QenK5",
  "key14": "EFgXuXmsXqQbuFJNaGrSYgmxbFNjVHamdkofBnK56DZ4LmLmfycnMMQq1UkySU4mfSkmCNVDkWujCE41bNjrSAX",
  "key15": "5Cxe9T18FXp1m595Mzz6a7zUnJtqCGbXrp8Ffh3uwd8mSopDRYARm44YppbCLvCkkKnBAgdpYrHUWtHZry7HPmUv",
  "key16": "5gBh8rpct3mRwsuC5Eqh2T6gXjd3xdNSXd5EoewrPPnUGwbrTugKUiodYPvpzkHjV32Rjzf7i1Pp4owN33c3v6qa",
  "key17": "47B2ZQjJ2YL4xkio1aamFLuCKaATiHrWoHGtHQTEXhBCXp2Tb56ZRuSFqEJxgmv3JiVVautytZfiZ7WtbMK8sUWM",
  "key18": "5MLe11VjFpptb2tDR1e5xv46Unwd1vsa3nYgHDPUAsWvKabrj91xz1NDhwCygi1ceDTMNqrRcJ9QDmK3JnffghH1",
  "key19": "3JjjnsYNTnJXeNgp1KRexkBRw5TVgeAi1zkrsTsuz82X6W5qmNvs6zubxY5oQa8LHVUPxQuvxsT9kshojpWR2vAV",
  "key20": "cVCZZJKrghsbJ45UVBFtVNovmiyv6ogr8VNEt9W5WdsqRuusubbc89yXsmGeSiy6UDh9tC1W5HX8wJML4dgkNMu",
  "key21": "4CAUnCbguePRRrWVmxkiedAWEjCx6sK51FMryMRWYQBDzx7k65zTnN8nPPxqbxjznRTbJXeATUuDHJyokA1J76hd",
  "key22": "2yV577Jz7nEa1cV5KqRievpGN2pgAzMtKZkzVr2HEL9FXYmZFnAepN15TYcY2V28QnghC2X4Hk5iSTGEEmhErwwU",
  "key23": "5YTmm1nyhJgi31D4t6XG6cEZLsY6SUiNYB79jdgoPiMbkn4Ewj3JZPvYsPKaMhJuER1YX4XrMHgU5Lgj1tu7ZsGC",
  "key24": "5BmVMVBc8T56GQFPr8pjbN12JaMbqyAymyB6MfHWxVazarbRCqjtBRURLi4y27HaQxv7i3uyjaRCRAQyPSvfD1HT",
  "key25": "24fQLX7Z1PRHvKLqHcEFusrDCzp6RnRTK1wsKpChVYgdRgzZ4gZ8oD9kxcLKbQ5ci4kQKjK7grbUFxpRHrsKxL8Y",
  "key26": "5PFDkQ21KYxTTcap2vzWD68tqDT1SvpN7A4WBtNRVg7nrXm8nuS1ZpSmzxwmaQ2kHZDFGXB8NXFYhdGkaAAbQahx",
  "key27": "62Xf24DuH3gzXTguuuaTs3K7w6rf18eV8HHgamX9TjR2wy4NfSid9sGUPnx4RMUuFVmzcbLaj7qiBMfzgDSkF7sH"
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
