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
    "5fcTLUp5HAENC1e2GpW6HyTM29CipvPzNsNsCPKxmoihit8RNWykmCCGnRSY4xK83Tw9xoaRN772M1LLWuwws92a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cTTWuV2Pjehai7Dxeq9Nv1MXu2gVGqMSLtUENKh5tqecscKsoAMK1i53AYHyvfohHKvGCVHytRSjT2hzYZGGdD5",
  "key1": "2YMZLvenDDdRie4Ffvnk7Yy5weirbzgxAQDmPfGWsXipAY6hkAaiaZqWrWj3zHMtdTBxJst1t7JpY2E7oNEuHyCP",
  "key2": "dtrW73fdUpgRYQVbDfJ9vorPn5ePZiZN4X8XtWL3R9v3YSiZvgvXXXQhsWjfinr8CJuCv9u8czYikJak8bP2SB8",
  "key3": "5XRw557zr9EcuWFgjBXj7ggPus4PekhRjWSzXCjN2a4cTbfb8svH7PPyanbE5C4GrcRi6d9q4guJPwRNCMLUQa3N",
  "key4": "41six2zUJQFAqGHkRjSWpueCZm5mXEbvQotoEtpCAnnNzVPPDCx39mwdK1rzGHKEp5mJKu4Zwcwnfn2wVLMRLE4f",
  "key5": "4qiHMz3MTHHAdEG9D978TY1bcda7AkBfQLdz6KjmqZ7F5r9K8yRBfNn2z14B8NCiA73Z63A1MTEDTEt8sPriemwz",
  "key6": "5picHVd1m9i5s17hwzNBWTPRVLiCKC4zBXQNVuWhSE23jXhVDm46irWbKmAi47rdX8RdpfFLZ1aqcCq9yGoikdXg",
  "key7": "4xB2VJjJekuqTXv1xd7B1QNph2E3xr7UXPZyoiYNzARiTr2EzUC2NE3bpFpBhH1eQ6zfbij7a18Zkyn82Aq92wQQ",
  "key8": "4MAmT6gtSTGJCYdm2QgTcYodEkPBRhqZHr3FJT19Z3pWi3QmoiQy6t9YCnqVzKpr7gcSEFvPSuznsExi9hh4VVWf",
  "key9": "5unUwRQErLipvDnehSb8z13wwCihPcJdKWc8z9rbg1YVjzbga69Gidm82Q6zqt9x8U2ReSzxydH9ukaTL7PfhRdu",
  "key10": "4LynE4Ea7g64imHN6ZHeNP8NAKa99RiUsUXErQqsVpcEDP5h5T5NB6qhSxY32LdgTcSMVbSyCeAW77CQx5e8eUiu",
  "key11": "2fNRMn9wSBioTPkyemApSeQWXPzXWgH27bsTPbBejAHkGWbTUsJj1kD34r3MMkZ5E7xFKbcghrcFpsckgRBBdffq",
  "key12": "3B6YtmAL7VgGGiLSRSdvYrmHprBj5V32cRga7c23dyKiLWibq52F5uj2YnX7sNLoJjQkfQZNmqh98JQNaQwZRf5E",
  "key13": "3ZFi94Rhk1EfUdc3s9FW3Kz9wacPkjFqtNY7Lu2JSKuz7pd4XfnYa9JuPNZXHmKiLqvmqFRUSdNMdwmKNx8jtfMC",
  "key14": "4JjF52Jmx664VupCVMCrK4uJnQAb3xDMmtoLBb6L2ec8KjZNufhBHrgFnpC3V3FNpTzsjU3uN9yHhEK2Jfk3LrCv",
  "key15": "3q4GSp2u8vDEoC5aQM23QZpMVVrfdRrwE3YY9shJCXZwBxJhFxBxv3Zx2L5uZg5EpUEaEe2rFErAGFdyBpMNiB7T",
  "key16": "2c8AGqmeug7tb5CUPbSGXMTzCvGJcuSH8tueKQMo3LLS7YCUq8idRLDefMiuEsQqxxLN15p6pK3uugeSW55bsQSt",
  "key17": "2bEpejXCh6tyhdHdyLdkH2g5jwc4w5i3u5K2C5QgoVAUh8h2cUunk3sesYRqGPdG6fnC1sU8ow62r62fnnD9t6uZ",
  "key18": "547xMmWMq9ERTXVLSebm6Hum4jPTR36cfcuN8dhV4KQrc9tkr8HH7ACWe2yjFYdUSz9VSD8Wrwu75PttA9Q38x9u",
  "key19": "2mvsoGrRnN7RGhWpZsDUK6ui2uibs2GUn7DKUz8XT2HE6FTvhFxGD5N25hrz4TbgdcrebFCcz9ikwX5P4vAGW5ee",
  "key20": "4b8k11rM4GzNKpd4Z3YNW7cB7jVCQh7DUf2tf52AWeWdBHig1A6dcyddEMHrBBpZqhsC4m2PFpD1nizub9fchFhG",
  "key21": "3qyuttLxyMT4qNHzgD7qThPor1uhpsPqcjba66zZ6qB7nPKgyoHyQXLbSbRUC7muoQesyp3Rinr6DjZ7Y82bZ1Zg",
  "key22": "3eKusRPKKBUx4tK7TQZvmXy3oHqCzGQyFntpMyvMaVxzPZ8bJs51nvL5vpRHevpAKv9FqAjGPUyY2BAxpon725yf",
  "key23": "3gmJ3UyQvNx1sGpH27yrzA1WTp5zQRNdgdoP5N8hVk3L4JC34oyYqwhyEqDnFfpx5sbLVmB4SYFDJ9VCfRSHv6CH",
  "key24": "3NdP4NxbyoKMh1YnJuGAeJALn4m6ooia5axVPpJZ1RMN3eWeQu3EARz4UdksBLETToerMFHrdXEQLdrud1w3mykp",
  "key25": "7szmRUBf2UPPHgiCX4NRN7BbNH6ecxkhMcQxgtFe5gbs1rpwfdEhcuxHn8bcaatKAPcfpNVRjdXUrQADaLykHhN",
  "key26": "SWVgd4PnUKWWdBYAcbAAeFgM4Y5zFAn782Hx3G8WHkK7P7eJojETUqPXpPsRTRYSLzTVcng51jyiecT3GPwdNCk",
  "key27": "22R7sDUcjzHAQeWWSBHRuKcbn2eE65NU9yen7gF5y3QDpE8BYZ5vFyLHGbH9vHXo5pjXKpcpLumVpijiFqXSCsyy",
  "key28": "3q7jyRQiZv5f4fuVExjz5npS7nsodWDQanTNGCzcywV55fZy4SoLq9FVfWGMwTQAxSeh9K4XaHHsr1A2m9jddkP6",
  "key29": "41bPb6kVGLhJe4uriqZzyxq9UWQPZpWDEjCUkbuUSmVe3yo7TABTSPGtuHE1HA4gxntcEjFh4dzRyH55J37HXQ9G",
  "key30": "8MBYXg1qnNTsWcaGYZGRSVPmmUKG3oTXaHMvPNGNnaXMS1teHGaMC1kgEc8tPXg1LqVM5mZSPAM9p8WCJhqFmrT",
  "key31": "45HWXb9TxkPgvDdZfztkXiBHecbEGSAwLm7qBJYFBsi7qEC5UdqquUw85vcnygmA6hZJK6Qd343AgBazqsMm2ndh",
  "key32": "5J5djPF4M8LKg9kNg4JK4mm1N4d24AfCcdRp5eQKGfar7e3bkbLPkp3Dbugr1MikRPP5CAckHjE3JoY2spEhqHvE",
  "key33": "49BFNGd9K66au7fH4Mxe13ebkpqR8ud4iBYsE9LdJjsSASbTLfjWC23LgugvXmCzxWPAwuRRa6bWA3a1cuerJgp6",
  "key34": "3ZUNVSjMFDF9sfU4JZXXjbdSpiJB5a7awbhEMxdddUaJB1qUW7G2Tmpi6fV29afsPEprQWnesCSEYrDyVEBwtbT",
  "key35": "4fN22mHcpgXTqTdNDvUS2eCDyRLbDJGYdffngJXqdsC3kBsL8zZRhskfVKL7RyBo3EBsbVd5UzVLpfqhWQCH3EzR"
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
