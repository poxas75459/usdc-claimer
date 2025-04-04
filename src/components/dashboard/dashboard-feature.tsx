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
    "wauhEhdF69C351UrZXdz8tdW5fAnaAARj2kdjrxm8SgPR4scJ564aG8Qq5CUk8GJrdoF9AyE6xfgyYKbtfiGnwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NVEkbRLCFQwKvbCpk9b2uz2SoXy8ZPgHSdyQoeVuFFiBn8z2j4KtApsYCga8PrJEio7pi8ai89cTDnf4TrC3VWY",
  "key1": "3gh8g8efVw6LmZDJK5bhxXvT49jSRg4Fq67MjMLiuLg9hzXRY8zY6BVpiZ5NzQPdpdwx6oZ4Dc6DCkc9JcrKwy2B",
  "key2": "4gSH6YHN6eCCLjhA6CeJvekUFQqbfQES5AyZbZNGHnz58WoeoV6KfkHdEGCLW7LYaaGF6DSWEc5JQx916LBxzBcm",
  "key3": "3ia4hfDpN1do3ZEQwGkTa8ax9XuRoPaAdTo3KmPqrbyewPfoeWHWboQrHc3XWcFXUXoKt1yxpEvEa8LLajmk8gsS",
  "key4": "5zwR1ki6wYBhiwU1ATKs52YWnPmnP4md4oChNZ2tS73BaHRFjqgXMTBrcbpQKX1iKJhm59a1uhtGq2Mgki97p4v",
  "key5": "2qfawQXmwCUW9jHGjgjQcKGZat2yyL96eC6DNSYn4BeksZNGzTAfufeXbUuu2pktieMvEuoNbKpgTU6qYg54kjcK",
  "key6": "2rhu6BGZtdKTn1bFza5NMGrtYTsphhayMAdzjGEYnNY1ZeRQ21BKRFWQ1yvRBstiG2RPBjB4im2h79JV38PSQKqU",
  "key7": "4RFReCmzv4Po9LuCMue5XG3Jp1Hmcw9R3dFV2cnKe6UzL9rPjfHMWpaEfLCoW9otwXADXoEYVMUikES3WVtKDNwW",
  "key8": "WfHFhcBBr4dYkfPFQavD2Y1KH7tjgVCw2ByXfFmxVXwJazeNSu9QusRG6YL7c3NiJ4eWVNfg3tpP7dDMZZY4a26",
  "key9": "5GPDpA2oHwXN31NsP6gedun7k8P4UhPERV6XhQcNhkLTs9M6WYviYeNj3WkH3JVvBpr1AhjTzA6cuvwx7hbn5R14",
  "key10": "4PfAc4YAo8KUPgcbPv5A9swUEtd2THTGUqxpRceg9d47raKomw5A7Jcz1kSpEXkJWHfGkQeKGhupjZUTpx5pPX1b",
  "key11": "31kxAznZgSnS6o2nwUHNmKxyq5bmsGBWMdSqDB9CRcq8rnvJEy8uDFGSc1fhBefgLcxcV7mc9eumzhdD8CHRyorj",
  "key12": "5C4gHnaWxwkCM455hGyY5tiDtnuPakQdbVUxA8agnQWnyubNjEgJHyrmgYSJ7ZCZQ3Nb3XqaRx6S12tcvXRTzcPN",
  "key13": "Me5RnLJUvF9NxCWRGAV1QPUTCGAetvxwdpKKxmDKYdAt1Y7pRYxmdskagq4tvwToeNxTyPhmeJkqf1JfivfQsxU",
  "key14": "H8WMgr85BhQSCbNKYYCNPYwqpepcVRk8oWV3RBF3bMGxJwwkKP3vP8LStZoMNucvv8tX2t7KAkwgy5j4ZqeW8DS",
  "key15": "61H7BSQaToGxLnDUMSnmRovqDJ7T8iyEaoPMvzi4kq2PnYAcYL67oyBFksRXSyBELhjDT6xR8atC5P6GVXH3ATpu",
  "key16": "4m39uzC6qFqEcrGZG8yh74vPc4Be2GuC1GjaxpTNsiZSkprUQm8hmdqG27jPaUPmx1UYpwL7d785FkwWm65epzB7",
  "key17": "eVMoK8zyiNiP4rtk1hiJ75tj8iQk4ehn3QeMoh98XVGezoxqfuFP9c7MQvUhx2qzAp2p8w7YFd4B53VnViEgz9C",
  "key18": "4m6r3j3dudC9bMengfzWmV5Jh8M1VB5pS5fHeDvVWcb7k3p4BVAEc8dJDacQFqhWBDd3ApvRNXsDggcp3gqKEURV",
  "key19": "3wFtWRPWm8PyuRWqfrt65y8eMZ8ayNtE2EdLASq2MLuvPvrkmd47edNKEzoEWCS9p8s3Xazw8Hr87w3EZBAP6C4h",
  "key20": "5FHQVg2eMtpgM27CF4Rg6dTzVp5rof8QGQgt4mFChAvWWLXn6BMVnzNcx8LTDDTvnzezcChegTbdjAKLPcwYAL68",
  "key21": "gYbkjTSeEqd8BEYPXRRVYNcjwdaqtTVexrUjuZgGREzZm2hPNKhMYFXo87x6GR1hWSGUmSLnAbVFRT3Q7ab9z65",
  "key22": "4CeUpdkjGV3cs8W4W8Yee2jQ5Ur7ERZM5h8Zvx545bvgQxxkZ2XwZaKKhc1vYQAtAWWyFAbpadBZErDmnQMRgc9o",
  "key23": "4XTYw8coFd2UH863T3ggV1HRiPevC9V34A29WqnqhVA915sJgiUWqaP7edsVpv8Kvp9iSVM8DgbG3tVc5GQHvtv9",
  "key24": "2LWEWsHVkdgprEoqamGVVWNicnANGQ53bHsewBYnYtinuo9KwtkY5h59HiqxML3JS93KjERzbJrSEz2U2bQUj66u",
  "key25": "41bL7nbmHbDvLjk6UKKVnmo2abftSPvveUt8pjP1Rg1tjkvTmi75odQLEBddw6K5iocCpEKaXHBtbjrVUgpvYHL7",
  "key26": "4ZTo2aBx2ZaeVwwUPiaYp6hkPYULJy3NEtoNxm95qQyHrhoyC49CCWGXU4CLz8ZGMdQjpu4h8BF4uwEQPLVJnKYX",
  "key27": "2gmkPKcPYiWVhzyuiYdWB1o3QZZbKFNBdZzsiyZoiHFjCdLZxgmW97h5hw31319ZkgpHp7iJ7mfZRxfqVKaCds9s",
  "key28": "QdTtF5QKfUchtRKHwkdLCfe7ttC2tjssUkMrTSXVA3oprWJwbWvnFq7Vqes6aTC3XyBjHWG12r75MhEoNkf89RC",
  "key29": "55apjn2e11wv3piiZ3a74iqPtwvaeKXThVnCa2FX6buRvVP2HcV4s7YSQG4d4wiGMt3jmfeiR8cKhKSZ4D6sKETm",
  "key30": "7Rs6XXKHh6fkPq7cWZaCekWmhWXQM4uwCYS6YB7Qinz2rCzk6atsk6sbv4YsXQHeukrozckCyT2HhbiMLx7WYMf",
  "key31": "4ZMS8CuCsZZpWe3NTPPEDqBj4wtAQnz8AhhmZFY8sLNLhj4WntabjCTrXXN6sV5FuY6enLhR92VKamSDzuJNLMhV",
  "key32": "4RBk94ovnRks14dyxosihFe1QUtKt5cTTwiERdm9aVxbikhG7qFSnH3tZPKPobha6EKCpgaY9FExtu5TiSCv3edH",
  "key33": "2iC2jqDypLeqZw188FHqGP5Wwcm3fw9fp3hiYAetMBz5aHmVECdrVcCLcEepLf2uCiAWT1LMm4AmGHX67rBBPtth",
  "key34": "56HZdEHZshTG4LCDaBTKarv5vMNxRQ9pwXMF7tcBc2iqDADkZPScAgJ5ctzHyTEVFDcxrbAvHvhH4LbYu5ebMTrE"
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
