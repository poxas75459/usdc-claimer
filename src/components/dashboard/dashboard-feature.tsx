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
    "343g3ZGiyKeaZaNyQSpjHwaSLsrqCZazNFrPaDEgqcm8RyG1Lr3vtmWuV6P8NusYAm1gCkzLg6y6E1zRXFrBwRBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56aF2oC4UDWKzP1h7afYG3ejtEsGBdZx7TP8njtWB9fePyEMy6hcmfi5zkBkm1SzsFRUmFCibR8x53299TdHGgRx",
  "key1": "s4a1PjZ9Azcm2JtyFghj1wsbd4Y2QKcDnCHi8d1vcakUqMiUf1WkjvqdehaVbAZicMYUYVC4CpRPr3dC1ukvGQq",
  "key2": "45hcEX4qiYhCQ1yYSjnhFuWsHQHworGQZsvrswQ5CZ292j7gpFDLumNfaGLd45menvyyz2cM2Wef7gyBmwofidic",
  "key3": "23eiW6W1RcBg5zFB5MLa2SV2VYRcM7841JXe19pFTtoFExRUuVU2TNLNx3d9R3tW87vyaGaZuNE2Hu6ocpPbX9ay",
  "key4": "4deUsxSikHZNAwhbb9NT237ZbsQCsJWMcQpz7Yg8UidXbPBZLuFsTxswqcd1EuhhUnuS4zEntsF9MMzTsCP8GjwU",
  "key5": "3rHRJQgFbKBHMZ6ex4jybXJCsrija7GxUiwNrXH4yJaoeEavupZwRw7dPuoy5EebHzG51fFuPLzSQBHK9eywpGsC",
  "key6": "2Ey9DLbFMQDmfA7fsEP775Uer6E52ftvFgv87wXqMhs4VxdUEGm75B5YZXjXhZZnjYh5oL7czz9uX4AKPv4tfh7N",
  "key7": "2EM6yrWgE3nUPnWhPfx1FoRyZd1PY9cDKj1Y9KvHJnNNss8TkpcCbxsRDpRUA8YXDM5BBDHEpgujdsSXfJZvakba",
  "key8": "5CrqV9m4xWm1GWpnL7eoAtRxTamMKGsdewovD755AfbUrQTpkP6g3hDoDxiZ1UyUVcgMKFtXmZZLgB2goKzR67v2",
  "key9": "3oF9sXkXjGYuDAaVTiAB5Yx6kubm7QWzwismsPqSsQKrVMJrrnbFKxNsWus8LSEgjKp3aGjoQeBrWEEvizG7kR5N",
  "key10": "4N8jBgqXVMkCCQowvoPxJ6eT246pBChRZktJu5T6Ten3evXVoAsf3VovyrB5DxDRZZrAJF3R2xfcHEdokfzaeJRR",
  "key11": "4EPbHgEN2yJ9K2jsa4EBxAQZoi1AAKHN6BCGGmjVGU2thrxu2oggUFH6KsxArcxVqboz698rhsXKnbEHH7acHrEy",
  "key12": "QkHxpML6SZ69w8ADuqALTU62HpSt8q5zSLEfHGeaPenfXVJgBBMeNHFJH1Q2iSpuDwpJ7zY7wsFZMHVhYvFLKMb",
  "key13": "29RJftmrUDBBwAs8Picao9ELqkXSjgg94XymW3zEAhYGGyTEhbKZdGQRrAqpqiepnDSuVkBSLog5BXNBq1t37Gzx",
  "key14": "B9UdT2ajVdxV2Z6berKzzgMSinN3Dwn6wo8eFpG9w3u42aFU99Xn78wnXsBBsuvCzj8wbHbfSUt4F6uy2vWG4Lo",
  "key15": "3UAQK1erkkEp9iEZ7rLGHfynaAjiygKNSE71cRGdKemhFrgwHyMUuN5AnLZhR2wbth5d6raPeAvK2augHW6ghhuU",
  "key16": "9pQUofjCCpQeyKNCLNR3QygH7RPR6EWH7KcQT4NWWP9F3Ax3mTkdaPBPPGudKE5P3eBALHUM9QhZf74vXpdtAtb",
  "key17": "3YE3Nr8Ccuar83Ze29kfj7NMTDvLhgJsXdJgoqaETvXtMSgR2qz2u3rpX145qoRZRGmE8JuWSciShuCz95p1FzW9",
  "key18": "jZuuA23DyzTVkLBwge5aAy3DLpkRjcqXZrB21fPnVcpTUqx2amSWqADAZVGHneKwPRanJ9HbPZLMe3ET2nHyqDc",
  "key19": "24eCyy3xAYshGAQ8BT33SbKdMSssZF5xaXNMTWUjuLXSr9qe3fodTqv4DvZKFPRk6Mfmirc1qMWCvkVSjDtq9Mpd",
  "key20": "F3f4PyiUsUeJ8n5jnnLGhBJJHxm4mU6RQ7sp7NLUP9fQjTG9FBoQEFFXTfhE5Dbhv5JDxfwyATPu7nadtziJNdX",
  "key21": "D63Kxe8AF2jRen9Z7KuehSNQhunAPzBKUQnyEYvejdVgd95i6bypnWEB3FnJ3ASuDTa5gSnSQc3HRYFdE6mLH6W",
  "key22": "RwNNjSRzVh47AkpcT9HVSKJPV8yBUw21UtsX5FyMMLRuAP8VmTUTkKNtwz5Pi679PTdc4QpcFLxdmjnYz8v2YzJ",
  "key23": "5xnBkbPYcXeZAMYhH7sTRs7jg5VqdYK26AGYEoGkfzrGr3Lh6kMiMtoANgi76gu3HcSSXQGQkzBqLk4UJD6saw5A",
  "key24": "3op7W4cJm5ayLjWuYDPpWA1Dxzy2n8oYHUzGk44A8Eg1wDMJGR1Vu4enRMKRGkc8EK65y51dFQvnJTpp4yDne13X",
  "key25": "2E9p2r6Jb4mqrEepYDpBKPG3zc8acYTdRoyjDLFnyaVjcPxhcbzDvxvTT18pnKU1cQKwE8YHCxk3KXipohmFVkNJ",
  "key26": "Dq7YJeLxmzrryqoVTDb9c7qrRzF9XxZ7PN7DWmLz6qwCd71uaWPggxLFw3sowwUeDeT5RUzzHzk52SuxfCF2B3q",
  "key27": "39DTgs86DP13pGKBvcKdR7DMLaUhTJVJ6CWKGmeXnVASomRxZtWABjSh1Wb529ma6WMmFvmXRd4w3BeYgLPAMf9R",
  "key28": "4bfZdKFJ19ADzrNyzBf3H1NvpyVvAEY53VEvhUw8CzKNbFeTPhonDgQR1nPnJk48UxMnnv8UfKGhf2PLTkZxnBzd",
  "key29": "ViexcFyCK1ziwK7YbP9JCLT4WiSE9PiDYXWjEVvMvcR67TUsVeEub7mdDxRPyopV4i1qBAkAx4yyWHhJGd1ChWA",
  "key30": "VWumTk3C99FaEHYy7uqJxrNqTRXwYt83Hi9zEHLFU1Jwf6gqWiKA1ksVuuSMRTrbBw2smjXFp4Kap29eRAemvyn",
  "key31": "3djEX8JaTX9tAs7U1c5PmDSD66tPconkm9WJG2n5m78PTuyhU2M2VSPrfbQc6VyxEGFCzQFpRt35MtHGdQRVrfL1",
  "key32": "npdXeqSekxNdyjZ8MbPgGmyPuefb2aLx24cRckgoeKcrETDfzHs4bpvBTjZatuAW5A1jFXtMXze7C36aXuvXQwh",
  "key33": "5UrMc7BtqBVFYMLYeuA5KgZnoH94KrQszBjxfim1zhgEohAT96SkvcG7HVT7HcA9ZDgjvH7MoJubaEwtXQbc1Ek2",
  "key34": "3uWBQmbueuR3jZFrnWL3vZApd6t7EZ7woa94gvnkhQ2TPGWLXnfh9Vn7NWXmG6LxEyuywhTziaFPGwAJodJmMFQa",
  "key35": "5cjTTz87gtx7Ry2KC6Fv729meYKDzxUKsEk3ZwixwtCaV2ZXfM57U9C43ugA5Pa5YGcLTVxhetmuP8RbYQi4zsJo",
  "key36": "4uLCq2UAvGggqTj5P8j97wav9PGZrvpR1N2GBFabbsrZmubzyhbKR4z7STmT6PXWBYboXSwWymJcozGEHmB5KvDs",
  "key37": "2QidsXXJAHKuj8yiQRpk9bDuzmW6e4AczPnWXnv7X2n4k9k1sVJvCqtu2nqPDC3woWJyHUhNrLPAqKRriWo49q5E",
  "key38": "5JoWVhsZ3tbASGMrUtMgY5Hge9kpsqQeNtYtq774buVuSdRkA2sKMiiDUr2ybM5YZ1jrbMo3zPS4g6W8Yv7LKJJB",
  "key39": "P8CHKfYjxBCi3waAq3SCem7TrrmzHYgDjQ1i8tkzxq9CFSEmpwF1iiVrCaBKEn1qjEEeH1Bu5MgdPWQNn1RpThi",
  "key40": "3vVrCmRcJxhGGTVeWdwWk64xfLG5jAADmdP2B8evT7g1J7GeVBKJLsGJzbW4coMrCxNRFMyrjQ7Hq1KZqRMuyHvc"
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
