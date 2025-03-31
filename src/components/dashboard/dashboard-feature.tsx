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
    "URbqbzKgpdrTEVrRGFdnXRdHXaic1gnjXs9t5GL8TLdELDLcsszYWST6VK38MuhbDdWwM4NADrQGEe229n18Tuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PTfy9nRV3PzzQ8nxvqun5U7mCXNYcAo4uuS4JkLzpw9WJqX6RereRvj5mMCdm5bDfJhLzAMGeX9NUm1o1LR9vRm",
  "key1": "D4ttUP9TX6uFXEGwD9yGeMMqMTLTeHRhJCS4pXhJC6rE9rqkwU47qpTCfT9kq8vJa8rFnEpNFWco7kFNrrFa3ah",
  "key2": "5RfvzGg8HwPZBCdpmDJWZhyDNwVN9Qpm8Q69GsGoAio6PVERf2ZBCp1acEiVBy6CqXs4m77VcYAmRiy6fwLVBBpG",
  "key3": "5vqkSx73aYXYcqdJS2T73uCxuU2iNKU9gy7Tjv3SkhivZXBc9U63zpAKYcU4HWKf46VK5mj75DYwokw1V7MsZ81p",
  "key4": "3hGTijTCckL1mw9Jc2ddpq99fGDLr6aei5ovUd888MeQWkjZ9poQDftqsgsSCexn9MjctJ2khJ8dG42eaLGfJEeX",
  "key5": "5Q6V7boQfB14g5HZiCxkemx5r5p7J5zKap4bBX637nSexaqA2itjZfXkAoUHHVjHNNMQYny1eXntBPxS7p2LaBz",
  "key6": "3zFw9xpmnp3EmZriRq8hYLbo1TBUU7LC8ktRiS816xgFxrsdMoA1wpjKH3QpzfTYRTfy5xdDkPRLYrZHho5YqrK8",
  "key7": "4fsGQCErPt2MXyvs72T6pjcwoVzvCgvUmSYC7iSv5nDduVDV9Z9qPg6KhWCDzkwRJZFXcTMThwRZJPirm6kfAJkq",
  "key8": "JE7iV6SPckn4H4WeMDiLmvuJD4eTutv1EKzhCorPsMnEMCNFSJPNbv1itJjX42te1a7cfaaq3E9t6TdAveD5hqd",
  "key9": "2covQ24VHpDVoTBYbkrrur1hkik8hDSZBb3AZ7FgMatkwTgnDVcePpNtemvsg7NaFAT5hR86RrfJjTpHgg5rxRue",
  "key10": "53sAuuJBMwsw57dDSNcpCfcCPdRsYC8NbYgwuujQwwSTWRLDtRAjxXUq1cr7S7CfbPNY7ACeQpMuxBk4aUCww5P7",
  "key11": "QjLZKrEiAFb1Kan22wpk1Csbqr5Vh3p1C4EeyjN3ZsJpprpANqbJ78H4zNKpA18dGazCtTxF5ku3XNPxhvrefKk",
  "key12": "2Vffsc5ts4SJvRUjGEu9gGutsEG9t5Zho3vtFbsfNu1kXpXsu5szS53KG6sqfvYe8sr1QYTx7jScUvSFBkLjJ8ic",
  "key13": "3kb3BNAYqPk1a8ikbnruTFJA8QCWwUH36YD6bM5ZNCuww6DdxuieA6KLXDwufvgvzwosMgLZdagDApg7YnDEa3YP",
  "key14": "2pH834YyWXcyfadCX39kKYpGBVa2aFsvd5u8P5saeVMuNz99mLHzeY7bsADwveJ39TQFyQXKBJNeM77TtuZMj7MR",
  "key15": "4v6AvRToAexgphkSRUBAXCJo3P2XZMJLKoYirVfLdfsWWckrVSYU2rq4iSwpdhjG4epM9skEAfjmB4BXPCQDD58",
  "key16": "2hvSpxNqVM7zLYrpHw53QZGE627SHDeFa1cXrCHCN9UNgbFduKUbZTVdrXkuhbhGEKi75WRivu7C5WjJSDXY6CL7",
  "key17": "45fbi3a8PtUWTA1wgoXNMba2q2pEQ8Z3jWyqmDa2daRFidfgnQCEQzVXeFbTxTFZkL3MXFHTSiB5zUJ5GT5UnoR9",
  "key18": "2TcEMPn8C7GXR1tYnE6DdCUj9kHqVFd1qCKrHafeGwEVMKhMHXdhV1BYnfvj8bzRQRCAkZMztfvoTbUdXTDEAwMQ",
  "key19": "4tsViQLPYNy57pAgfyBVyJdjo4j3Fg2CmtUb47gGn3L5MLamioutZ1FpL5PHxpVpN91YGGV16p8Zx77q9JMCfqqq",
  "key20": "3KK2Ctc1EPSzorEB2e14rcL7G1aD25wa5rDptPHU8CKFiA616PRKm9D2EL2AayLrdQ2ifzVN1TMGaWDuDSzspGTw",
  "key21": "4V1sCtssfv1Ua4jpR1DaUsRkAqAx8ct3nw8E5NWL5GEBSn13CM13udUfUTkr9WhhZAcejRKNWRw9HPEnK3hPzqmp",
  "key22": "3kXbwyyVTbpwjYVbeKAci87CnbXyCTGLnUu64yQ8brW1QeuWbeJZnM4GdR15zbNXvz244p6q2mZnMggUzBPb4jPn",
  "key23": "4Tznd6QYvSKRuxcYLxwJMjj6vXSaS8SrQVLDrP4fEzrQMp8esnD6sRHsw88hvRuBuoHhLFaqUNGVS4QM23XiiCEu",
  "key24": "3ZiQRGoLZkF5deHC4BxA4w9B5MYiESdXNXsngpTquHk4ixrz49UGA8kAVDa9AqPZguGY1KGoCEqnfqiYwijVTVVg",
  "key25": "5BhWSSYaeU1fKVsSGmR5X4tdoMvNVGf8qKedy2hQJXGVSMgKQtQNwY8jKRqbmqVk1nfdnLuVHt5ZgTBtBK9JSqNm",
  "key26": "5M2wuzUQoJ1qa5PrDpRuVpt2N1mRqWmcHxXwu6bHe9cMX1jVF4Lv6rg82qCJ5WfrSRS7QAYTfBupRbQ5RLtjdfQ6",
  "key27": "46NQLy4b3WwtJtxoUGi1jCEwXPM4QVYbsaZrRZyFkZjao4fyyFkSicTgJtTy8n9WuCuUnvS1fQPSVbGyfT6433NU",
  "key28": "2RZwhtnNQGWhGoehkqETeDYKXBW38LxCRjY6BeYFasUzhFz7Th8Ucys4SVTMzQSw6n6HXD5Zuf77MnUnNrBPgwdL",
  "key29": "4tVBxdkvyPiH3kJnXUCsDMpYmvh7FMS33jAoxFRbKJzuxN2NSXGrMA2AwWCMZcw8urku5TzMaAW2E2W1WvQickx2",
  "key30": "3Nja32MjhTRa15EtTq2UM1qezBtJS43qHBDfJPZ7YZABahtUABvA6pCF8YaUoSPC1x3523KBJYUdvrpYzwThGPUx",
  "key31": "32R1ECQnNceWbgZUoENhsPPHiBs49p2PfaUyrU2wSCyUmUKJvkyCads8Q9d417XEEaUJoGoi3ZXbCDHQfpBuFu6J",
  "key32": "HoH742U1pdrbBwcg9fhV2zxK9L3JQGnfxTqTWMDWxitoNu11fjQdrtVowbfXpSUv8VyhuMtCogqFxp8p2u42KdX",
  "key33": "2s5BPLDp324TFRNyy8K5nMuLcdb1nN4adPxu4bBVPw3TkX7ZRc8ZQdzBTDgDqq2q366gnbJw1Fc2e9fPcgwzeHjp",
  "key34": "2KJ8788zZxHT4Zsde6B8hsZEw9iyxYF1nDuoDvuzZ8j3TgXMCKST25RVqXoSZM4tSyiGmLbL9TryBZcxLRY7LN4o",
  "key35": "2k1XpEpdYoWra9YqvcGCo5sPLPgydUdtoDALbv68GWXbHa2MeAXS4N2mrv2J8mR5F8UiQB3hhsdKnJQ738ZDSDGA",
  "key36": "2HUQEBvYPhPCqLqC6zTfSUwES6C6faM2phnCM44tkChEohxuSSz3nTq6eJqEN7rQ6Qk1jJ9BoUWvUgmmADTvE5hu",
  "key37": "63Gt75UYwRquLuHDpU4uosG33V3LE3oxbcF8pKoB6YZ2DEMZC37K1B6nEMvMSnxDsgDjKUuexUpVv4wiFcTX4SWE",
  "key38": "3pTA1puHyXYWpZwv2fcnZAj4w9exvDUbyvCJ7mW4pDRRxjH99fRbE76CDH65jHUtqsx7kHeLfjRQZ9PUKgfCqNuw",
  "key39": "yPXttkiitMHCvsUXVDHHzd5mkdXKWxVd95qi892NYaEGQEJWpy6ESFogv3XxDFAy7VqQUPqGyoGTZmp8bFW2yJa",
  "key40": "4AtJpF2cTkxwhKPMaT3Ny2kzHsrgA8rtYKaFtfgCrhCTTAAU9iNEvEsL3tEHPaiSAEobhFbjY14EmPYivTi9XXfh"
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
