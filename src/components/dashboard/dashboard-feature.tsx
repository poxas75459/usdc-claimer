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
    "th2aPXA4mnhUWRbpAaNVYxrLSBPMzg5E9TEzmD5eLyExHspJ4PcRBasnbdWbiVH2agWkarwBeqAkCoFoeEnb22R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26EcFdkjxT6qXE8Zb4PcSKqKAmKfZw7HdT1h1sMzAFQcdiDQhbb2P3k7EZaDyLGAipiZ5hp8moZYAX1ymzrga5rb",
  "key1": "4qYb7xY2noXbkVmMVCjSAQDGiE9KNqfacCbfb4XGeHMc5iqzmMGM36Gxqmy25PCLeSLWZmhQSRTHkYEBVr663LRN",
  "key2": "5ErbmFUuNBE61dowCQV2UDaiRWNYyN5s2AmUzaPBC5Gd4aMFqsPH7bstaCjiBHF6hv4wEdemmKPk4duak33DUY62",
  "key3": "3czrApWQUQZEzw6dW3NNpievJSEac3K5YaALDRTGaJsMDUJWGdPJ9KUj744uBPVQhXFu5ws3nJSqjerDwDkkQ9CP",
  "key4": "PD2oh2voBf3GNNnfBbrMQrFDoKhuKsrokJivz7s9r4QphTJkyCeG28B2zFNKYbysxYwdUDx4Lur6HfyjQ5aDsvj",
  "key5": "5ZyLyoQC3cW8Piy6up58rfLoL1TtRMUAracrwREFEUUqCtcf4mSGfGw4kL5RuWXqhgR94CrzrgoMe6WWcsUVYJJu",
  "key6": "2nhug2TjQKSNaMg6s9tQ36QLURNzz1oGLK7MkJeyhVPKCYfPAbPuRPYxYTa7Fbt9SD1WHzaPLvHuGjHHLDNpjDFm",
  "key7": "3yUn9qf5D2c2gyW1NSaghdXipvHz813WGE35JCdtwaV2UK7NjujaX3uLb1bUAxs55SkEmHoHXt5bGEReSfTMYbcB",
  "key8": "2ZNrouGvem8MyTZX6KKQpAL9vQmB1yLBgRMs2DRrbxyqMTYefn6F6meZYe8AiKeZvuVLDWLJztmqB1GQywK7UKjf",
  "key9": "4FzFb9Cxfy6P4BrZhT1sDm7aYAbCLsMsy9KcHHivMbfn3L7iu42uLFwYSbMoEUfBADQ1YJszU5VA3iB9Ts7vuuoX",
  "key10": "3e5ro1JtLw8oR8ca1vTT8ZWZ3wwdybPbKiRSp1DHRGeCZg8Ph1AQs6fKdnRyVkGmf4r6EXNF3FNBVHX2DiuAnRMh",
  "key11": "2VVNLhRLQBwP9KgqmqyTSd7vy2e8tXBB9ZRzurSQbcDd7wXbKfFZzUhpWYkco4TSbsexdGsBNTQVkShz1rHkHqFC",
  "key12": "4JoAnNYnZN3SjbghFFk3zPpwS1S6BXkxUyvndcnNDnFhutprB8jy9fcWFBoDfF5Uoi2fqDJYModHGv5XWqsE1AAS",
  "key13": "3bgnEUkxkN4eVNqucf4CfAdeU2YiUjcsSXrwsrQHccWBSUZDj1CMqMateagRui7EdQ2LYXg9MMkU7rpxmkCTeQC6",
  "key14": "3D3KdpTQwvjt8JMdpMYShiWev5XizPQRzjnw4iACCyYnZFTo11n8BQAy5Yn4qMLw1mAfQJpekx89C45vcXyXWK7R",
  "key15": "LMaS8ynY369XjnA3946uLx5k2PMvPMRtsT6nbaZw6Nk6CzTGD15FufVHPqhG6KGq7W7aya3LY3t4X4oyXnUVpir",
  "key16": "253Z7Mp7f6y1CzKiR35kxhPxj7N7yc17pEVwyUyykCD5Xcrrethntpw7Pguq8Ku4EEUDw1uGzZdNyW7GXH5yo4jJ",
  "key17": "4oEbACuBCGhJHsN6EC1kxJ7wpx2vpDuhXu74W18NxT6UUCaGUFT6zCNhaQ89sUrydaA5xGe4GuTvovXKFij8n6EU",
  "key18": "62gmHw5kbQ4KJ9R7YPd5R1v8aozgqZvGvAnPeMuS2nPwv5rM5oNKy3vVmmf5k2g4ACHWveDpeAdApeGkYcL3qaSg",
  "key19": "34x4dPAHrzLZ7AJDHpPob2LbgUwVvLL2jnnsrGssBT2X4UEcB1d9uaMoGMh76saWDwY3inW4PEcP9T6FuzoMLNgB",
  "key20": "h28gPetrkQijujKmiYMS3cRdsWyTJpc5Ukb88MgqPFEiBkVG1D7dWUKxxji11goKk2o6nigpG4jGsou55naSRvY",
  "key21": "46tUbTayzv7wmFXTjagPdqobTx6UHAVMAtGugP5Dsis2UexbeSz5Xkpv79U4vepGppUmq3WdJFQhxQ78fXF1XUSn",
  "key22": "4MWe38DT8ThhcEc14HyEo2yhEE2mJMkmeeUfJXgi7LLMLVFxXmsy83MF8oxaQzp6UvdGWCSihqH3AeK8FsDQp6hH",
  "key23": "4nNTtzkqmb1ZNRTBjm5g6hrBJ2p5FGrvzCgu113DXW4iGBcMWZZ2TYQQjYoCtzJh6sJJCGDkY2MeHbzBEhJsKAeS",
  "key24": "4ijV3jsY38kp6r6ouk1WahxuHeG82gde2hsp4j7QasqtQbPhLijfiKxBSycjNWMrF7grrhPJYsBDeqtkZTGKD8RQ",
  "key25": "3ZV2rVdV2M17WGYshaS6LANY3dyjZGV5LvkhvwWT1pbAq7CbKZkiikwcFzSi6PW3m9MURpk3L6nCtSVyW8CHngRH",
  "key26": "3V3uBep6xtvLaiSinfD7GhAgZwSkJPN75Mf9J2dTQ1mmCb8PESsLkzqsLm3ezQ8cC8AcuBtL8H8N9C4R6QvCJDFJ",
  "key27": "5Zsc6cCGByDgsQt3iJUqboeSCeBeNATtnV7ZRFBFRpw4BSsHiiTkKwZ4T8thyNe9DrbFtbNZX9FsshVRaPetBUQ5",
  "key28": "U3okvh7bhYThVzbrVuetDqpokPdqXBkhAWjpwXKfRApkyt6DPcqky2MLKpBMjtovZszHDFn3Lnp6QrtKrhJjgwz",
  "key29": "a4tFGmZfhHPYtGh6QV8nV9HXYN8PJRxydNGJ95Mo4qKhPp1Y3skAp21FwQKUUPWCqj4141s2RnAYMZ8NRcdQjTH",
  "key30": "66MZ5aNH1wR5odaJA4yHUCPURHJnA95nxrFxjbpxapFLwRGE7AH1dcbUFqyDaLQEEKCU5pLQo7rQTfLKkQzuJ2od",
  "key31": "peBNFSNnp3pSTWhXKbjLbHbspLNxvLQVoZ1d4Yd8KoECZe42NTbJEWk1fBUTk7YPNYdexwrHr14wQnfzXeMa5R7",
  "key32": "4y4HRkzAASSDzy812sYhZAVqTQQ7gcat2gagsuopv62CXLehzDH1yXTAyyEH3ee7UGKQ7PLsxew5CDcPyDJeM3CD",
  "key33": "5LqHzW7hA9hT6BkoRb7LDUxCyEk1mZvsAXLdkE7YtMLeV2FvYyfXQArPMJNPpBAQJcaYtpwRRPQgVAVon4B6UHTr",
  "key34": "5QuHHdAbdbgMQf4BdgdUT6QawBtS5joTd4nnMfg8vmLviVQN7tb95qB2nGvWwV211q5xfabvDPZn9WPRBNkZRjuo"
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
