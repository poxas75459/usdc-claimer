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
    "44pmaChBhB4C8RspKSuazcxcBm8oGYFfxGgKSWWSWNRpHy9TpApXzroMHTRkSatKb3TcYoatd74L1T6aGMuYMPm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wgbRPYmM3BgY7BDtzhpyziRTo66Q165Ex8YsWaGu7ANgFxwHSyuwXdrbSTGo57WTBwbkgBu8Ewmrjzgga2qdztE",
  "key1": "5KYwnbZnMZLAP1v8fEmG6hyoduBzKSvG1dbwaGUs6bW4wUtuFNE3cMxV33cvkM5kbkbaMWh1cLtX6iT2H7ycVMz5",
  "key2": "3yKQDa5yCyN8uxbqDTkMigSXWkXvthxJhpow5Vaa2czkwqgqmwLdK9P7ytrVh4Xwjjgogcw5TGrJT2Fc2bZvX2Ar",
  "key3": "5s6oKJxCdEf2xeTvTCpBp9HTTXaWBe2BmLj5GQv2dsAMwDUV5WHBm1pqg9tb4b5ZYG4mFUAtfTuBETX8MGk118Cu",
  "key4": "3X3Qio77u8bCYu4crya9xFPMwzowHiPKTe32eQN2Bxwt9oFmK3ybP18cPUqzGp9zM92rPMGVzTvLnAKytS1hGx8z",
  "key5": "3wFRrdLK3GRP7UJrixfYUNzfMTCd3KTupxv9iFbkonexfBTc9bSivu65SddrsAW1YVZHt1LgGJ5sVcT3htKoJmDT",
  "key6": "2ntSTspVgLRSPsNCaF2BEYYYJc5JHVXJaieot4nEcfS8iBDundW9sCSBPR5dzPGd8NYjxDLuoXKkVvJBLyNpVyY4",
  "key7": "5QKqoFjV17XGA2yD5YSdvBSn8Nr1itza2TWQDL8KX3gcNoF6dw1siebExek1tZRAbxp6hSnFzvJx35Mzrjqgkg3H",
  "key8": "2X1jPGRjLRFat2dnDzbqhtyEo5tQXjAN57EafsehcR9dQa8Lxof5PdnMN3RGrXn3x69VzQSVEuUNceKsbdv4szJg",
  "key9": "5QTewbriYa1hEyrrBYfjYcMtmhZd5r8xyrCU7B1fCpuW4AKAqCM1nvcQV9XnBo9JwoSLVRQ7a9LDk9C2knviPDMw",
  "key10": "Qezf4rkJ6zgHx9izn2ByvDcvkQKRHZ7TSYAAZu4JhqyNjWssp7V4YiWdNzSe6AZt6Ec8ZFaJNEtUXWYdSufRJRE",
  "key11": "4qjxDJgpGerR77ELvz6sYcE2aqLAffwkKhzbYZfbQpZuMxaUccStYw8G1wHWcvgMZNFi8Qk6nHb98NSCv2opDanK",
  "key12": "4AdKKz3GYyjFJjSk552WtDeR272nZwQePtvs3ANaUQT2srqob7BniFaVqmbEdT9mMv3C9upJS4zrnMSHaCqdH2DK",
  "key13": "2CYoJ5s4pSRz9pNsADmywYimkv44CMN1YBMyT6ahJe1esoxoLZWkX12SsJZ7qZQ3xUGjte6jo2xvBaWyX8o428VN",
  "key14": "44a6XgPWeMqax2cNUu3nZ2RvkVWZgfFwC6qWnrKtWEPXTjiGbwsRtJTbYufrDzRbxcv1Ci5GrsxPxga3J9qWRcUw",
  "key15": "2R3fsyXMrym3FqakAJfNEahko8NYkoQyFyKDi4Ly1Exz3ApMVBj9Eg5t9en8J7YTzouJxoNRvRP9sw1p9BGgfBwF",
  "key16": "5MUSaxNdGZ6twMCDiaV2gx9hMUx9EAd1RK2a5JrDfjTTRppGKFwyh5B2nygDeNwK4GbpcQL6FEXkKVcoDtWycoNv",
  "key17": "2zJDrp92ikTW4n9h6wdhWpjDRWfNfn8SgcSjErxFoLizBRn2rpJAMLJ4tAr7DQfqjvf76ix7uraHAfiVCUBU9bKL",
  "key18": "39ZZVjK7J1HPufiFZFhDs7GBrRFTc7hhp1cMyuPaMmXWPi98nyxXVfk5ZTySEaJxbd54iXGAFGxV5G88vdwYDEXe",
  "key19": "3odX2kePUZxVytctQDzjGd4qi9ktEbBeBWbjXFEZMfJ5M2gmsPCHKfSuQBYsr4iJDrvY13YWeL8kCDUxj4RMQcUq",
  "key20": "4fsouXezXkUoSanfazVzDS6HzELzKkucV1h26wxLxb4Q2FtQfNxjat9K5bNQ6PrWPY2RjU5VyuQgLbcWH2V2gAPh",
  "key21": "QB2bDzWpW8rq1jqrx9y3M9z2MqVpZanoqE553rBpRK4QsEPM94eLw5UXNT2WntdRhHWyHf2pNPdFhbnoh9SFGAG",
  "key22": "46FfxFmFCwnyKUoLhXQee442CeE7qZ5YU6zjmLUXbv8RhJUFdjBh9GZ4AocFTe5EuZJLznq1HWM19kn2MnkBQem3",
  "key23": "4CD5vyN6DDGyzRPur2V26wFhp3fupn1JfnuCTNVMHTActM1zyyaqxjnSHsHdSXxvQoQGJp2b949EGmiddLmhCp5C",
  "key24": "483e9BCbbWW42dawvprRT43cBgPgUBffcE5ivnRYHUkVX8vj11F3gw4KinHBu1it2xBx4NNHiPBLaQagzcEkeVeg",
  "key25": "3s3QsBxpUkvr1KbExRjR7WGPQWtsBSnt9q1tZJ527wK7vzJgxogzB5CtcUbPUHemBLHPy9wKPssNUzabccgGbps2",
  "key26": "3JosGJpLBhJTZJXLcy2jgTB4MkJf4qXWtzNQbnv6KiqndmqRG6E4vDaYWbYFmwf5j3D6y62kQhFozGQYp7ufjdQH",
  "key27": "38rttQ3bWX4rPdNwf7xZGQeU3i7N9QrbqiMxtMs5mj8mRH4xXp6Pf3pRpGkDAefwhWafixdr7AugTX71bvN6E8xC",
  "key28": "4uwbWGGrMxdchuv2Eg27g5NjU4pXUNegCVaXoQ93h9hMgnyWjL1j19RQSm77tUx9oeJVNmf8ZjN3u4xrR5noi8tC",
  "key29": "5x2EE9NWzpYnvthvKehAC59LhFrqdbkDNc4J82QfQLGjEs2xtjprHukx1crEkQxZSza2aHxehnveRaJUms9eGDLg",
  "key30": "4yRwa5WZmNikWjWAohZXyveQPozhErF4PKM5NcFe2M4dQd54U76Q6RX32ugEKnPWQnJcDQDpURUKpnXZUFi7CZtq",
  "key31": "4yPVsmWd1uRWoTkajrtFJsebk9hm943YfhacvrBpM1vANWUoeG8FUWGkaVFMtvSJYbXVCpUmK9UZfiYW3z6pJD5C",
  "key32": "5KaDyEnjbg46UcGmZzxcrPVkGCgSNj9MZyKcooD9JpfLDdVA4qERHCM5sQjpCb9hp35YjXkrNFyNM4eVFZLBGfAU",
  "key33": "2EtUQtTHYYS4aiFAoKoxHEDBt8nmpCVt2LXcTUHQy28A3rtCWg6b2f2ngfJEog7h7MqRoWpPwSLJVHq727ZcNK2f",
  "key34": "2ZXVK7e64G8iXGj5wziT6KTpGsquo7dSw3emJmk1Cvw2RDna2Ne3ecaqk9RhMMsYpSnVRsbf3LCbXYNvzb1Vogam",
  "key35": "4r2AGrm22wXTh9eMTxoZTsysbjTs12ziRCsm5i888vrhbRuCUC7byyZZQCaUQyXNWVYRxTmSt5mgUjoEKGVVYYYD",
  "key36": "4CdQ6wKSpUB8nW2mfbpxa966ePas5YX1nPVY8VHXcg3J2TALAqXfZ4VbyxZ6YEjU3xuUXYwBsraL15ZijQP7XSEg",
  "key37": "3bdjDKrH75HLxNkkjzNpkr8Vv6gsf9wvrRQn2sidkHqHRuVMyuedsq2E2E2ogZ4k5MAYYikzbH3nNa2ooDN94m59"
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
