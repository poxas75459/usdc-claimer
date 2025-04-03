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
    "3wPciSMSRh8WVeBM9UWNtFWKN2c5mGEdjLxrXTHaw3zrPYHPyDTsdG233ahQDknUn7teZkGiqNnizjdjy485M4xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JbYVHqpTDzLYJ5SHoKzXbVvNgmw7Syk4hGVHzkaq4w875nhARMi3Zyz7pVud1JBFUnFbEmJ7kWzL6b9AyUYzVG1",
  "key1": "2f71T1enGSV4Pi8srFbdXRphHgz1jjUUFtnzCgbTp542t5FqbRAivU4aCi4CiGg93YPn33oV2WYuTTp3eZu85KS1",
  "key2": "3Kem8Xuy6nGLnAgojfZn576pt3LoLGCkCrsGGG6XZAHaHW3DhJCmSy2GQqYNRFf7rf6KgFm7GFvV1uZrNP9ghJsN",
  "key3": "4SFmFQFdEWmEVPYYEgaYCJHGBKepeqC245KLxFrtCpATf3Xp7gzKVncSAZgH63mRAzoGKqVTYGKtFBcuUMggTSpC",
  "key4": "gHvL415YMaDbhuRxg3Tx6D6aDxsnjP81gfZ4LWUY5Ldeqn4E8gfgXgo9e7SZHybrFKaP18sm51o84GQoxZZMSG8",
  "key5": "43WXR2tJwptV27fcWHmtwo5RRJdcLYf2LbKLG6Er6n8FGwVp7pEpAfcBH88MyMygon1bkcKqNnGp6wQpDhWt9gxe",
  "key6": "zNTT3v57CAp9KtSs6ec8mi5tN5ZCFPe4pFexipZdgJUG9KC3bazsMruudCmehNaFJn7FJbaWNBYQ489ST4pcjuq",
  "key7": "5MX2PB4SAEPnxPaZqbcAPAXA2SxVFH67FEjdHHPKRn8urkZSXxkeYBTn27Pct1KGdeohtTPkFRDU3dKJsUFkg7zC",
  "key8": "3dkbfkArueafH8VBSoJNyjCJstbeD2TxLczvV3pby4DjXFQLYK9YQKvtmo2DF3j2QTGja8obVW4u8U3xZZpkD2B7",
  "key9": "3KEbpHFtygECSAZXcfNpRwVuCyWE1C4JWafChqWjs9YMPyr835ENUmChEgbjS2625SBky3cay1iYUybthQ7GHEJw",
  "key10": "3MDQVDvYs7drPRuLFvqKeuwfR8KvdggKdzMc7bvQw9JHRKZ2uY5F4Q9RaQHuFSQbKpF6r8zj4RoXKDxHZVejevdS",
  "key11": "4SRCVnrbbThyro6XD9frodWMSaJJEw26zuBxdTRXLVyJJwoApV61UemtSr9seGY1d4iL6DPKyak4MwqobCAq2Wds",
  "key12": "3pWfZ2Gvh4ip66436yhHraJXswPnkeEb5hWRyMaMK6pBX2kVuEUXHa4kW7eqcfkDMSXTCdJncoi36WyLrvhiSPy5",
  "key13": "4h2SxYUrMcjsEtT5iPBaJRWGi6Ks4eHy1pk83iNrrAPXcA1kfMm7PyxYNVHRahFjc5UBEWK8emSsFwYYgEhrZqAu",
  "key14": "2s5XeGbCtvhBrjJe82BPYzvVBnpZspnWxT3rwCm8veCEkT9rEsQAs5YL5zrbxcXd6bG2351tKWaxt34kphNbJX3h",
  "key15": "3QD4nKfqBBk7hkTQzBgPG8hvHfDoApZ6C6npvAhdP8AR4ycpGi3dZkXWrPFEGYVYz8rF1Jb68eZHEterxxcTD14S",
  "key16": "3nFz5JH3ge8QyqGXESEUF2ZW6EeyM6CdzaYAbv7fzBEsqSi9qsJgeXb92Ms7PmWzdkWQW8mLdqCtaYGtQ8tVUKwA",
  "key17": "3wWJz6iUa8bXKm49pQCeLnbddh1SMRy5eifBpHEiukz1YppocDiRW5EwwFsT8tfFwJe4Ld7nkpuhF2NpqLrni1Ff",
  "key18": "2pZdwUKPH1Z3ShR1AguWYUCGT4WDWxXFSw6FdeLP1VeVpS6HfaRKM1WCo89Jxqo4dLveKS7YkiyLCWE9jhbqNQxG",
  "key19": "2fB4UN6kSi7ym6rwkdSeALtpZ2NRyBJUvUxnVFwc7Te4fo2RyLjX8bXBwd6sNGSCLBYcUhqBBfrTUEDxt8kHNqjY",
  "key20": "5Fph4tVYxZD9mDSjLQkDiCHKb9LRALK65B8SqGK1zVSVzENiopMrtxcMo17KxDCTvj5K9Y4yskAXEYHY6vs91aoH",
  "key21": "5wipe4GBrDBS2cb6arB1yd3nbyKbQAuKMNG41BBBLDjJdUy3f6VPeVpMvWJ5LCv3QNgUcoWux9Xxq3CT2AAWi6Ch",
  "key22": "3REMuXdBNG7x5zT2hkCJM8JEpn8tuF7utaMF5hdxpjG7B8Hq1Pe7YPMqA1iWUAZfUueh2mH6zoH1SDRmjDUvetVc",
  "key23": "W2XTHFUjSFBqaQy6ZSR9JFU5YQAaU4swA99F2facw4Ra33c63fsHAF5D9aXa2cy6M3ZQunyZWRq18x1aEk8K1cM",
  "key24": "3hEdyrZpCYQwRT3Gx784yA6w3Eg2JYpALLrLKdwW9SjrjQzfMag5Y2sDjYp9stov6p4CSNYBEkiqkfpMT3xfp3Mc",
  "key25": "5dYbhVAGYwutPT8ZtAKinPqu2Ynt9osTQVKmxwtiqZPSZ4mBS84w2h8oP9YkHBtkoxqJRipenDgowagqV5VHs65H",
  "key26": "3A3Vmqu6MTFm2rCMCjY1BqBf27MXUdPYBDTNWyBNY7vDjbDXiYizPBvwzyeFUCP8FcHEtSeQSX3brmkyCTyh6pEo",
  "key27": "2Tt8FtjrWwLiXYBwFBUNHSRtP5uCSeLZWJtcx7HLWNKNrEVkVDjH78P4Da15YJkhe49BN83vS2it5jp2XyPscwFt",
  "key28": "3cGJK9zfs8LqWCwH1iEPwWDMEkcnMkmAG8Fm7NsG2vfpBexRwNNfEmgpQLpSnmY1Tce5Y16fVzBACqeXhCgvoq4V",
  "key29": "Vh1kfLRoqKSroxHTvPKMZ4aHg6Vgw59bdXZacsE2uW95VjQeM6fzy1gm2ioezjfx6JesjvuJYdQQveDaoXKLrn9",
  "key30": "2aWbPR6khwCxyr62nyJPbiMHbpb2sqGG1guDz2E5MBAo1zH8nngcfbMPFxGLRQHBFBE9g34BWztxoHC24FreJ6xD",
  "key31": "5oiphveLkCFx2G9dvvqgcNUdccjjthJt9eZu4y9ZUtQ3TuutUoVd2TBfKj3dPt9H9MbrsAe93Q4SN3D8vcdhJKzy",
  "key32": "3gS5RHb631dMLiuBteX9Cd1Jpb8U4o9vQfXYEVrX5bSYEjhLVTgugoXfEtPg38rPw1rqM3SrVzoNnw2jyEhJns1j",
  "key33": "5VnMjHcTyuQHfrmW1A55piC5mFXqFUts6feJfiykvzmjdbFjh1v7rQCtwm13iux8tmCo8oGkCfhJMfcvXS1QtJdT"
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
