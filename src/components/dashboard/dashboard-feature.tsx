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
    "34Z8coinAtQ9GbjCtAr1sP4HcnPy9Pp7hF8gDMsEcc33rzLocLmJgCWswnywLnBkkJhLUiVag4gEbGMu8MS5gvQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pM9DSX2By8zQYCKCKvnJjrbCvQhSuNucyeEt1LcqGpnvNiR2hTMkHFgg25V4997k4UW5gJgATJnM6J2DSjoECCG",
  "key1": "2EgsjtgmUs3efm2VMvWkB1UhcJW8TjFupjzUzN4kFiYQnYJW9PzFxu4Urjd5vFuyGaMVKNZDqnBY9vyVWVTH6yjH",
  "key2": "DEYZy7PQBHr7oyyzZUoFPhAAuz6EFQXTHTyyhhWNE6zs2uqFeMVkZnTP9qZKF87oSG9yeiExnfLQmgNWzBXSDUz",
  "key3": "4CjvZ3DgNuWV7cwERyMGNTh4qjK7JeNM89nJ7YVvgw18Ya84MdQVfvKhx1YxinKgMYf45yZR1iRAU1qhH39FdDGS",
  "key4": "4Ge6b1Q3Z289T29kKK4qX8D2baexhhUknz19bjgfDP9ir2ERh8ja1C57jiEhGjDMm3vrp37Xe5rcUkmY3pidxsN1",
  "key5": "4j2ckhBkad8i4Xs1pZDyJ8tRMAhc3FSD4hnyCEUGJ12yNw9S244nYvE9TsVMPrSWwQ7GwUqNXdJSDbwTaPgoaBUX",
  "key6": "2JPhpomEN9oEYxFi7uEPnF4yeABz379frCPkpqMjkoJtD5pQJkJ3xQvVdyjzvKfYttkjPsUGmNTC1fbSjYfkGas8",
  "key7": "2paUqruigDJWN1SCTFApWQ2nBaoGj4cPVGDfatLfbmVNxAfBi8XvkC499keQV9QzzTXW8jszpnfa4rxq1sohWzDU",
  "key8": "4m7aP4rrZpgpZ9dejgYr9KEKBH3gxJaTHbjm7L3x2gNteMmfyJ4TRo8biRfERgV3mCueR6xKnRFkztfbuLSjYqHG",
  "key9": "3Ry7hE5z4k2ErTUacYtk6kKVCKy84WxyLxY5Vx2h8PJF25frc62Lwo4KLQuaUUrsrgNC8VfsqXK768yUT3fKEDe4",
  "key10": "3JG59GD7vYXr8ZDifJmcjMewkrHPRTnkoQhmTYMU8Tkmj56BQFHazkS3pGj2wxGUBm5EG57ythFf92YsbXCEsW7d",
  "key11": "5Ux2sd4HnADBWamQ4nbEMKtCre8nNE5oebSPLvyE47oA3toav9enCuGXgqBW2xRKMz2Gm2CBrDWNtbNyWrgrKKvG",
  "key12": "4kH5JD4uWMgYvfxT8FUwwuwnca88ET23GRHbHQPmHXsxanYGkD2GyhEyhUSuc7sPUdUAVfLxf8LZuBR9WoqFjyaW",
  "key13": "39FXDCgBCoJPg4KY266eFwKbYsbDKLdzivAXSvABjeNBPUZdRKpSkj3Esz5gN8koe5pRGJCMQhqg3QkLW23YXE5F",
  "key14": "2sNsP76E2UTUjvtgZwEx7Sn8QixRVCUdJyyd8fpq4AiMbcW5nLqP8VBL27Et7UJKfvuK1W727zpRwjbyTM4V6fRS",
  "key15": "2Ps8QiCK1yGXRqCvDtNpWW37Dxpnv6hk3PB2RUcvocDKwBAM9oSFHVppXRxJLhSanxMuvDhuFRuavqvyFV2YQcpr",
  "key16": "4jf5vE1w5tRxrgcc8tF11ACK4YY3Qx9tPxT2xEgiUTvE1vHo77BNDrHZTURYXoae2nAyzcfiCTDbPv2CkRujXppA",
  "key17": "JYphsoZnTezQn3KRFgRiaaL2bNfs86MG9hvrwdte1FZxUD8DhDdZDnfiEpxXvwwg6vcWXBSD9TMHB2SqCf3xNsH",
  "key18": "3tnTXt5GoN8dWm5azFJmKFYyEz6a2hJq1FBiDrnM7AtMqrtG5CGDY9XY3JTX3E5GZ3hWAkCBKonjPrfwSVxC8Sga",
  "key19": "5rczFoN2RuJYE8TBu6gxkNBxKVtCToDzDhFyXKycMJFeZyR4LtSqif8xvWyugsZJwTagA2mJyd1DNCcJTGQTV8cc",
  "key20": "2pDkZaZeof5fJsv93UCLo3wnYxn7YWfcWFfSSZBaL498FZeK2Tve5bRVfUbDs2VoA8ZmFeYZGwbhwYXFd3Euqpwa",
  "key21": "nBwq7jiibwDDkFxHfiur5TwuPFDycXcrWmRKyfbhp9m2iToiHiQCduArRfgvxdQSp17Ey83Yq8JqqmrLcuGHU5v",
  "key22": "2ktzoZfHj77JHSgUFA7kCpnkRFJTDZhWsfDbhSEUoNMUST2ppCz6ZntJXBEnFkWvZiBFUhqwCXrobK3mcbxCpqXB",
  "key23": "4PSuCv2y686Mc2HRSViCqHsuDFw4hbu87vhke2tEVNiKoE1vDoyUtTyQYiGoTwNZGPR26RUsNa1n1xWGAQ2awNjw",
  "key24": "4w6BcPW5QhCbYJoWYG55fYkxxGe9jj48fVKANYDRQyq2YLnxAn5LQmrWUjicXRdpq2usG8mC2Fp4qi7Q9VYa8xsL",
  "key25": "3kZA4uXcjWvX2A5SuHzC3BDSechb9kQgQKTayTVG5oXsQpXMRpukvFsZ22GwD1vgwmLo7R74pQPY4M1w8K1qWxRs",
  "key26": "2JgZ8v1CuhZnfadPcWeJAJSvyJ5WfgX4jjKGuTQiUYhJEESZtVkYWdQAvomULKokZGc5bHatxVDWVQyjDrWTfA3u"
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
