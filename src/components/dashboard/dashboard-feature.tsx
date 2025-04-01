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
    "5o3gsYP1uxfC2RRDNeFrLBL8fjeftbjccQpneWP8WFQjpNWUTb3Hf4ymwNbpfLYh4QUK34vzrqHuTcsuUmztPHwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HVrXzuroYzP7nu42cwxvJU1pZjU46WE4Ngv8roAQtm5i4aJZygEq3wGshBLLgxdTjvhDWSF4kyU3hhGcKgwvASz",
  "key1": "51dBHd5opZyzhibmsuiQJpWAx8ZxARKaacDuN8BV1QfEegxM3fG82ud3yzRKKv3XEdwRg3bAjFjX5Qx2Ce2Rb3rj",
  "key2": "2ZGTfkZDzyZSpLfwcz3ET9w9FVhp6XCbi93NW3u8X7n8zDNw3os5Top9z84QAF5ef1ndWNYgVPLVfCf4pbS6fsdq",
  "key3": "3ewbJseM2APU6iPF5sbaJpcDFaWbkWZFih73wMuVPx8K5wxRrmegaC4qg3GZAYTHW4kU2iymG2mUyVJAnRSayXgW",
  "key4": "3mcUvN5ZPakxxMtptaV23m8FFUgtSRadD45cLCS2ZXui3f54eS5RF8vpVxg2DKxsp8o6JendDGMXrForDKbG61vP",
  "key5": "HTrmyY3iHAvn8FNYPsGFqhtDfp4d2887trYfTqJoxXkoy3pMNUC123GZcAowXXHwCz2zgM9PsjcqnSpoBrmhbE1",
  "key6": "5cMZjLPC1cHDVntX6S6CZDaAh4gqKP2TmhoWetS6NYdyzZmR3GuGd4CkhuiyY8o7V55LQzU98VCccWHU1ZCcPNAc",
  "key7": "4q1x6ba2amryAyxaTZioRgLa1QTXTUG2BLHmgyy9DBKgk5Ho3LfRTptE83KjWAvG98KjM8h5fk3YZqNzQ9nHR1XZ",
  "key8": "4gGmRrVB8JnYvzELEby4k8MHpaUCzcCjmHoQKzXKfNbu7ziHcYE1o2KrtQ6FyG8WPNCzCvAM8BJvs2uRLRu6gNcd",
  "key9": "3tp3aHYDsH5xi7nBbQu94GrwpE8GYHAwcoHzBW3XWtCH8f21nqQAL3uaSoQYXUXDjofTkraXMuGL5PAAaxK3Chij",
  "key10": "3sEGCXRnwRjuj6o3NXsDtXGyVekPHVPivL85FZwsmQkWQ1ijHGRBpM26VRk9nd6zJnwYdTmfSSpojdtMJ5dKY4A6",
  "key11": "4pwHbu4uy6iC9n1uaaVB9H4epR27xjGEnVGoMDYDr4fn8NhnX1HXWPbXoWtiSFc9h93SLVVkZ2qq1HjoBkBSX93p",
  "key12": "4FaDteV1AcZGJUvYraHRCNGdN2wTBQ1UiSS1whEcohAbGN1cGoRo8rz3afT2W1SpcWgy68fC5VZzXK9w1EZqMpuB",
  "key13": "4mRwiQ6CueuPeqd67EzMy4qrTThuinVTME6ZMDC4AP1VTCWtf64UJtda6hzxpuDEo9KZ5tVpb42MGQoMUVhDHh16",
  "key14": "YoA6PwzsMG2agqTgopDxVg3LCzfF9wXdQDASkg9PmuYbLxLXN5ABmZRSf7q69YLmqMbM9QEKvQ8dvnVZMjCJzqj",
  "key15": "7JyBiMh8Mb1kZvrtetUgBq9bE9TEo7jJHdqaEjwXy38Fp8s2DN8ooGVBFLo2E3m4YrfTFLVtfZLEmWsdR8RqEqb",
  "key16": "47Ad2u1d5hZE9LZW6xfgeUbcNx1pSCASEfkTXKkqMfDTaWrFJA2XjkouZgfxMNwdBhyebzTHTt7nHfbnCtmUG54j",
  "key17": "25QyUNVSDwgZHfspZD2cLQ75ynt6E4fAjCD5KmL8kjx9qEdaqKdRq5tJ3cefFmKzjUZPEiSWtfaKHCcSvCpWLJGD",
  "key18": "GoDgnxT2PPezuM5ybXWN72A7oS9T6vgjqzsg8RAm6tPttUACQH2cKJb658yiWhUNdBsW1abPTsVxLgSEu4ZXjzF",
  "key19": "qurSyAzPEFDLRrqQvF2VACtfwfg3vv2csySBi2i6xnmpZUqJxxNhCSGk8vnLVwx8pvD8R6YU4S7Npfr7gBS4xay",
  "key20": "Krv3v8YkEUUx7CSQJSaPhDjU2GPja34XUhTDazEr9F18WujhHxyWra2YsVu1HjFuhTjebXW8eD5F4GgnDqWAZ3L",
  "key21": "34eXJFuDtC36a5jHBi1nN22PX7NgM8zQhrycx7kQZWB9hxjG3F6nhRLRT41zcwW4Ni2jGgnaXqQMPUcRkVyX6Jzu",
  "key22": "3Qx19EeGiepJdvWdRr8HBHno59n6moUvPFqRH9iyqTRR1sDWJU3sBfKCdPYGEun6qNf1twtrAuVbTkfoipftX5W9",
  "key23": "XgZXM7QUYmBvVUtsQgPuC27FvmSAf23Bn5e3ukJC4J3WJ4yzhkRs6YkzyF7vaAHKjoB4crzpGTFratqDCpZB2M3",
  "key24": "4bK31kwE8iudfQ5quQTkQLJ2tS8PnoFKijS7RA7CtTQMUFUgA5DZtk5ApBJj9CnyWCqMyHo56w5hBp1Mmwga5D15",
  "key25": "3m7HC92JhAxUKfoEd99ykLqMsWyRBXB6nnfnGUC7YUwrRCC8QZhvSfUEW85ThubKVR1qbeaeVMFKRzPYEyhz4TRV",
  "key26": "2KzdzFobRNTqksbsM2KCoWQig64Zxif2g1jwFcxspGLj7jsEv1RwAjS65TPKDLV81JGQP17r9gBwut1vfagAdDoz",
  "key27": "5575Tgf7LheGddxfj1NNVouLQG1SVPNEAd39MwQjt2nfCt8ZQhPzhfxfGMjvNyq52JkJCa5CusECnZDiiWUNfkDt",
  "key28": "4VMenZv729AefrUdTJ5P2WCnDKk2V7yoENfcHXtKXRmqYPWm7TCsHbVsy553N6MTSVgmgUDvuKaj8J1Zev4TrpLT"
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
