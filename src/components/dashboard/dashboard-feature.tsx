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
    "5SuhM2MayZjTaDLpUCd8pX1GbaymSEJPSfZPBR3N2UFhEhoc9pYhbCNRQDScNBnfzDtaTDQoh9D58Ag7aLFe2FZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCXNXRcTFEhY6w9BHT2Q36fE3zrpqTW943JA711tiEz2FTvrxvnw6VveXq22tkUNMgtaRtQPYQLU3QvVrM5AGCj",
  "key1": "38pp51u75fdcmULUArPVv7JVtYBQNqmf3Nc6y3XZuvNLHNpSTn3KfESFtoQxZWMHEsDCL1vp78YbFKW3nRBYSBGT",
  "key2": "2X44U7srFh4h7LijDAkZh1WrnZUuuoadaxVdUGW8hnvGiP8x3UUjdHrHayhpECKWpfzQ6BbD2WS2BWXL1EbycjVF",
  "key3": "xSuix6EsGT9g44fh6zcVxu5253VPB1nnYicRS6Y6BQfkxcHnT9wkFSBxBbcdVPHVTySMHaCQ7NTmBxC3GER5ph7",
  "key4": "5xgqt3pQCkpJkz1ZivdaNPpi668J7B3pmh1DoXmYFdQNyCvqZFrdkJqxL7dLuyHFLa6ZagMshxwXYzBsp3bEu8dd",
  "key5": "K18g9EqJBWPrLFRGhY7azQ7jXqprZFQvFXaUPeKYtGFNTcbdEpT74EGTcsc8WRvUPycHwmUd1o5mzZRZfGMY3RE",
  "key6": "5rzECE5F4R1MtJTaovH6Dpn98ugsHscYmsjmtVNHtxrNEJuoVmr89nJcbqQgqYe3nzDKm8JGYxDJYfLiuwTWiEMY",
  "key7": "4ioR25AxwGdpuvHx8GpMhP1V7AsuFnqqDMzYR37u3jC355czsTcguwV9ND8kdKVmCoX1NGujFw2tv9etToHmQigN",
  "key8": "3Qb9sHx9WBq22PxukXhwua42XWhhcc7vPgywkgSoRdCZ4gUDZ9YDSeiYbEd2wD5nNfJQ7eqMTxU11UbLk5WRVn76",
  "key9": "25wjQhj7Vp7pGQne2A9x9fp6jh5TUTvKpdLGydsXZ12MGG8TAATTdfdeFzcbmdbWotStu9RE8Dh8NWatfpKAdb7f",
  "key10": "3S3XWRn1FoVvR1ERhWj2t6oHLZPLa6kWKnWqvWBC9b6QYzQG7wf4jgETD9YGvX13g5PmJg15VxBGtBjU5c7RBFiY",
  "key11": "5G59kHCFCDdBkBNir7GZzFdvcm4pGGbMZJmRZzqeXpZMzzCnT9UootDVCaVBa7KD4BErN8y8sY2PHNJG9PFtaEJ5",
  "key12": "5MLs4AigVH1zkPc8V9CoALpg57ZKoEYsWEuCDK356BybREkTCymoALQbLwtvWY6DoQSedKR3Cq4spDPxqpsAs8Vp",
  "key13": "66ac3q1WLNXoYMYhP8bb9mH6TTT9EP2XzapeGnJpZt8fYYwfr2PmN6RPNBMTYaUJe9rZeWeLAsrWJq5MRwSMEZLX",
  "key14": "5Wx9jiQkxGfovb772FUkvYS1ptwkh37Yave3DPxqjBM71ckqFq3Ebhpsn1xUqpdFMfCkrDr9B6XnrHVJiDEDrXaz",
  "key15": "3mVPN8zZLww1Fwer3Lb98hsnLTN7S8pmtCP4vpTjGU3Jos7ajXCjfBnR8ngVdavScb3yMEQsBY6Agk82ANqyEdcQ",
  "key16": "5RRxyzXQbYEXTN2uamcZDzpmbzP3DNr2nEwzHzGibRBb9tqudUDS5HFY7Y9Dzgyq1fqLCMPCqk8tKXoPUqS1KNkH",
  "key17": "3TX9srXKXcFuU5edAJYLoCkwNHwS38928zgPZqxLGUVwNM5u2rwV15REAno2VucnyLAzyG7PiaPRHxgT5ZLzF13m",
  "key18": "5ErERc2pimB2cCUW9cWSGBw5qqH7J2gMj1XDoBB64y48gX4JDNHzTQ5BhgQYBcZzpgsGcCQdGVZwNt17nVbjNWNd",
  "key19": "41Ju8zDDrU35rE2G2wVLDizkgsV76w97p8tvkq3bw7wte2JgQGNzUbsCfdzkTLVGyvvGCyD3AjckPQtGRBXiimdP",
  "key20": "ZC7LQFpMNS8EzvTqdm6RGaQ9Xfz1Kg5ddmYFtKipEa1SoBtSMf73Ed7JFNcNEkoXGQLhxjhiuxqtRbPk2VdghXa",
  "key21": "5HDuDV2ZJqZ334PFYF3Kn6GxUb9UedYfAxZ1CaGpY9XcBhDXqTqwWPBz2QpK3JJBPi5aREd8C6zKHJtZGsp39gAf",
  "key22": "46Hv5EPvAwTMeXzvXQpd6wez3Gz58jEFrY9cC5jeYKVKKTZbEBoC8ocQNjcQnEDHP7VYhTzkHKFCBYcAcJ1DLeH5",
  "key23": "4d9yQE36F6j1GaBpyYsRu6dFA23DFmxLDoq33qybuxjzFrXNgLKC5QRrwsFsTUUAebcc6rJdTrQkJW3Xwwf3bdYh",
  "key24": "5rct8jsyhPv35rirogF59ZQ5PDFvAoWoctpBu63MxDXT7Z25QP9gtuCDdL1YM9ofMH175RCWnbC3GR9x4d6G5Y4K",
  "key25": "2VRRrsqDGPXeLrPg27vWHu8iEguExgZY2Srt9QH4NKpLuA8KJnJ3a6UxoAFg8NufJjahGT4jBTpv6KJ159kap1qn",
  "key26": "y3NJ6ZYTs29XCJVtbAba3YTn5fEdMioXQ9nfS5oRhPpr8vPQaBpMCXc8JRkfsKkLotJMfE8eRN4Qf9baa7b8pXi",
  "key27": "BfXp8DRGak8pS3nNKENN4RtiC3JrkufbMv75q5ySPPN9oHv63SBaVqmdCUiNhoi3U9yE4U5QUbassQ2hz5mWRX5",
  "key28": "4rFRxTffQqQSwWkdK5KnVsauPpdx5avSUFpd7vUuWDwSAyFtett1hSrMwecg1nGpotkpTm4YGBPZec6faj8JAbQP",
  "key29": "451LgBjFC16bViygFqBHYjTTSrEE3oDkuioq1ApEgt7Yt2s3qULwnhoU5enwLd7P6FsiXjs3WG9Tg82oa6hKqRTk",
  "key30": "Nh1EWd6dGtj5NFZgGviED3F6kPhtho3Yyt7EB16KE53vj1YxjaRbdRANgzFBj25zBNZYod5MdWS6C5NhwxpTwW5",
  "key31": "3xBx5bUPcpRUAtA6CoHCNiNEeD3g6rdBhSfJrbjDY9RSehKgb7M8gfVJL1jYzdiimH9CpSxSQMwi3e51mwYXqbsY"
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
