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
    "ninc41eqCqs5rz3Sr8YqsnhiTEnXFPvVWJsPAQhhS5Xmk7xe6dN7Y8taK9R539fL1uj3YVvg2jwZrzqrzhkBuo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvZTBdExHoGxHZDKvc8H6gQx2MEpU8GmMi6HmCYE7C47RZ3jyboHq24XqNJBpg3mEz91PtenqXA5ew2bwvdCT1T",
  "key1": "h7iLut54pkz1t1Akys46jgcKSYqdv4Pyh16Re9gTd9YZBvu7uRKcpySoADJ8pFwjPhEkvyrLfBLH4zaYWdgUdxV",
  "key2": "rRScC4HNGY1QPEtpwCEDrMEuz5hfovG6mHrjbqVTT7pNNpNtG9T1p8vhvTyt98WkAcZ9JCVhkCBHPeTfdd9FEsj",
  "key3": "5jTFBbQpJmYaexueguSmjbXJVYi2Jwc4stKzvTvnLRaeZefAG4GoYuW7CiZP3FyKgx1favfqs2AMg72nZ7vaVaMW",
  "key4": "BRSsDEgZTmk5i3FCwAsCdEmwaWJuUnAASJhEm7vE97djhQVDnyAn2v3SeWXCzhSkKVbEDzM2KeiJZWoADiLg1ne",
  "key5": "556aA2sD1UdxSwsHViUgzahpjK3TsYUTc5fXVBBES5moXJCNFyaUeFTcwCTEHpGeSdhndb4WiAEL9KNSTWMhmU4b",
  "key6": "Pgm6vmWDWZGa33Y6LsSbmaAa47c5kxk8p9qvneEwEJC47gSTHpcSsUHHJL4Zfs5h42M6gJxZDo1cGSbeXXst6mr",
  "key7": "2Xg5raV2YMGUviXPp2M4BDPf3yUG4edtVDWju344Gbbbwk8B3PBtTRRC3WtkgVdNMzPT2HCr4rHT8hFj2CLYggFe",
  "key8": "2BaEqAG2AxenM3g2i79NQd2XrT3rDzPsimR7NWiH9r3HTRgnsK7ouCw5QXrBjjwMU31PDjGeFmGPQ6Ue6ZYnrmYa",
  "key9": "5gt4gj3xoePXAtBvUNRMbN5TVJfnRtgUrLapo8X3YEd4p8WDNjDw4iE3nPUKBsaQYAJaYaBSWXWy53hfcLvWc1HN",
  "key10": "21WfLmEHmgxBbZsXX3zfGJeQp2CkQxQKM6pi93kH2R7EAcMMYBkM188srEctAGusSUHgS6bwEzvqWqRzW9KuVbm2",
  "key11": "2mSB9wnhr3MKjbuUQYmHxNHpCQVRnY7qVaZ358bomo9iKxGCrNt9awNtJ9K4vz5AuuZthyUWWkGhSedkKF5hDTFz",
  "key12": "63b6VzewJQV7QCFaBpRuNFxWhyjTLcpxDXsFtgjxvkzwpKme3VcT8hUN9NPAsiG55fJq4ye4N93Ch1v9uWqPFKnu",
  "key13": "4SmU9CHa3cLmVtzRQ4DPiqg8Q1MhEAPiWwSMzcahAzWTcRsjr6U8buV9xK29fZMq1cjN8QMF2TNkDS39HnwaCjo1",
  "key14": "4WEuDmnoDv3mbFpEvEGbEPb2decL927BRMAvnbVEwaEXGyskXAMxaNhe36AdCAiu9uPy4H3ptRhJFjrUEeUKJ3a6",
  "key15": "qvFC6KtGdVanUMxW9JkHBSJPXqL2omWqQYs3AWzoLd59o7R1pKJUqbnsmiRZbrbAVFjPorirUUWnXDkvYg7Ch1i",
  "key16": "4EEQSCbV7LGFZN4QDz2Sjo4Dqz9Tns3tpaTf89pAEaegtHYj262gRt6Kz3d6Xvu7Rup4AvsPuQXzYDiA7sJrXNFM",
  "key17": "7HYBPBzW1Kwg2UJK3pYLg1pgE4JqurtvKtB3GhnGcnq9XSeDFMSNhC4YBPihCJwVYgtC8z1dZfUf9avB3qRnnYq",
  "key18": "43xq5mXSGXC8UP4M2Uo5VuXKBt1jh7azvoVuUwN1nA2umg5TYbw6dTFpTPt32yS1t1i8PFwBTFXU8mzH1oXBaKDT",
  "key19": "52wJC1YA6P12VqEbhC1Y6GnRQqSLN8F3RuKbr5fi4PqXDdQ2G9eTNXJ46q9EvPocJLcXNtt2MS5V7MUhVfSGwQ3v",
  "key20": "2x9wKqwATUavJkL2zVnw1gD1XRq5d8fyKDmFCPBKvMfHtfQFbX3VmmktZRjDignBh3qgR3SiL7XuyED5uQ847k4C",
  "key21": "58s6cSnTFdTMxHLhtCzzTeNkT5dmhaP6UXNwb4wbmdQ7aqS3iVx2vnjM9Y2YFXtuzXAdYhMQhaGW9j5hSE7WGsWG",
  "key22": "9sLbw1FYZQ45F9pF5cxQK2f8JX1ZBUnrSCj2RzmEqG3FrDfVNr69qd7gXaNdsA8Di1G1W1oEdLLaw3QhQo1gP4d",
  "key23": "3yVtJP6hsivBJvApNsKQ83CfX8pPmrcsn9BHnsprxMwsYktNbc3spVKhAY2xdm2j5hCFH9s4FcHhg1ifMzYUx7sk",
  "key24": "5bLPL5bXESimXhS8QpXRE7K3JJ4458FVstx4H77B8yacNvEP4aR6fd1p4vqMuN7dmiese8RVXqfUhZwLRR7eBCYx",
  "key25": "5TiAQ66qJXVx1bar34iyZCEiZ2zp1Adtj5Br7GpQbrKhinHGuixVvX84vL2kobaPwexJLFZRCYn4kDzKyvMMCsnX",
  "key26": "36vMqbot4PUNmYgLmermjGCD74hJDMurWPSjYbao7BWqhbdbJDU8Qgy4tfGuyrfJjqxPftHzsK5HpuWeuFKg5nrz",
  "key27": "rjdViTxtrxoVdrJuTLDAz2Af8M74yp1XjNCjewCiMsyp3xUrrNxjzoaediqUfEUkkhr66hySykftH4fv4g1nJZr",
  "key28": "49MswviHimjVGMLX5zyen4DikraozkoWrkcYSEHrcGrHA6VX9W4zfZfMLmQjaPZKRkY5wiK6HCeNokkUGpYmURJE"
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
