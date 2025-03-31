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
    "5LMAtAK7HeP6mTpLMAvqBFPqGW5Y2n2a67hz8yMPQPhY4vLecuonCqstuDHcHSHFBiMUWmSE7MKJsoqEh6DxAwbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64amXPqY5VdQpgQHstX5L6tHtMJHFKgs8ztQQQipCQXbM1vam7MAv6Y6Q1MxLdxd7gQDQKTJ1oWmucw4RRTqi4ei",
  "key1": "4i2pafmvAJGG6CwmKDSdsVg65qnGsxLX1Vh3CdWi9gh4ZWi7hqbVPGqqFRnVkTxeqaHGFuAfxHyfSgXom4zr7eVR",
  "key2": "67KfDPWsR4aAMoDc5Ak2btF4rhuVKxsn1KKFpZx9fm3b5n8fQFfnQsdVQ5NAAyHnartrMrdtuEUg8hSM2WQsYQSY",
  "key3": "4cR4gNUTfx8GqXgghszyMw1WvE1zFunF9acVC7qD56qrNm2E6Jpp4whhAh4vHT3hgGTnT6rxZtqqmi3uZnCGR7D1",
  "key4": "2kj3nyLQQHvPja9YkKZLnBhf1QvYP69bPbmjsCD6yx5WCuuLWQrfEfq8VKKjsBg9gTxboSBKrW1PEZUUSjRBf5f4",
  "key5": "5n4PbULXy4yJPf9svYZW6ZdpmJBosJz1KEskcM9L3Thj3SYc2oZUMAmTNk8Xr4wmzNUauar3UYAJHbcmzwaL1PJu",
  "key6": "4L62AMQZtpBoXbQUoAuv5o2mv54zYzNcGDgrkvK3HizffmXuHbtcMa2oL2RGmdtm6JqRzcKzhA2A8CJxpAS1PJCi",
  "key7": "3gYwW3eNjy7nva2Kskp9wYRtqEQGq1nnD9KqxZBCS5WmAWTApydw1MZeKsJnv1acHFJ92HVLk22wnVLiP2cVeejT",
  "key8": "3nDEh81Y9vNoD2uLm4tXsjcJPsWEnsPZU2Eq4khFtMRAH7Zu9Dew2srWn1wTpiUzLdsokbtfzf5ftUDWtZ9kCR2L",
  "key9": "EemsCMBPrXjQu4Z6d7B9MqTkQL7DoFTMRiWuJgqVWYgn4VkrxKp1PTpTKBSHi8EiThxJVGNr3K897sZvL3PiFDk",
  "key10": "2xcgFbPg1WfKsJ4v9vmfs885Gga4Q3R3VGhU16UFQ3FZKro8Sz77doWtwugRHKXK3uUaKMaCJfxGVMCNpUjhar2m",
  "key11": "4qZoLfH41fcoPWeAV5ZwgV7zEZtnRYnLGHngtoN3t7Uo5KbKg3qyCyKKZvekZFw3xberK9ARM8931TDbj3z7Pt8d",
  "key12": "58Cq4QC9d7QWFzD5LQtqj9WPG3n5EabZNLyQuHuP76MMAL2QFDdsiYZHLtbZCiKTYMZzkfQuiJBZ4TsNJQWKuzod",
  "key13": "4x9C54j2D5p13L1Kh4DGPtbEkGfKBjfz9GbjKTtYbjyxpjxVWgHpPS9JHnHH4Lncanj5yg4Fvk4xs2ykQwhaYdqH",
  "key14": "4t1GpKszyL38z4AKF5okBrSYtC8SjrwKEHsEKtsKk29NJm2E6N5jMDLsUSEYo2kRVNcHfW52cVqFcELyE8PsV4xM",
  "key15": "2tg9PziW1waFxs19qWsboxMJR48CUi5yVwHo4FM5WDywt2U4iFb9ViWPLaFeJzZhhq7sk2cEgiUuXqS6csZmnqSK",
  "key16": "318eDsk1gEWBEac7uD49smJwvuerx217Hmz4tABkyH2LYKBSvuGJdcGF9gtyLUMuCyEDZS8RrMmeic5h82BdFUSC",
  "key17": "uCmpD4549kvms7kRLA9hVRdib6bRdY1mHrTtJWWCAdjmEVyim7nXnFKf9BHpVdtpbwQDBgir488V5HnPj8M6m5i",
  "key18": "49w4kXH1rQH42ZMM2r2bFHVfP4qLzewFaic2E2yEDBRpnYcXq4GXkTAzgEUJw8DkH263ArTMqEAhjm36gtEdAMCg",
  "key19": "3hbh6k75r8eeP7y6Aa7kTURRp2MPQ4gcA4LApgJHSUdyw67JrwurPnEN5BBrsAy1d1iTDgLuU6TF2tKrvNLGMnoZ",
  "key20": "3iv9LJJaiDpowkQ2tYq8cypfh2fqbtsyPNeLPRhHYpYGVh3uUaxxfgnvHgyR2PKb5myh8wciA5PMM4GycdH2kk8X",
  "key21": "4ssuPqdZCdamo4YJy9PJLXnEQ1sAAMjfcp9tGcSg5dC61eiGHgCyoH6PFm4BapSKsMsvAQ8RvDUTNSsvvNLQ1Rr5",
  "key22": "439xGne8tKixUskzfrvVqz8rx3xvavYKMd5qcSCYdr5yZQ34vAyjwghqnmDGzt6SXGYGnx45tM2QvJQEnX8n2vuA",
  "key23": "3KxqeHSzD9ry5ERjPLrWQxpGYK7xUqNx89s31sKZQrB5hpUoaPW1JivRrw7KbHCaRhMPiAnoJK2rmgogjByEAZwu",
  "key24": "3gUShnCku3yYMLg81Zd4DGXZyARg99wNiz8J8DSScMfV6QdWB5w3JSqC6aMUTPEM6ex9F6fbGZEPTLB74DN31qF5",
  "key25": "5wncJxYZhy1JLTUzEKvzHft6QDFW6o54aE3TZuSErK2EnmgnamnWsqSeV3wGXEvWhRtjRr5aUXJ1ZqfN7kF56emU",
  "key26": "2Exrbo2VsK3ueiU8vmEpsb7B3bgqoT612RSprffD11BJijcKn9pCbtv21bhKdVUTMrRAsd9uyfkjYzLMqy1dAngR",
  "key27": "2Z8g1WzPBKAumh4FUfknYzK6FeqKd4EibamGGaai732Xent5b6e6FpT3CVz354fKFSRAD1cYGuoc2acvNWZLCCkL",
  "key28": "5FYjMA33PAhGKNn2NgpcvMbSWkGY73saHRD5LePEC56WGnuSBH1chZFMopADgp6Euubnaq2c7Pm9rWTUX67vSusQ",
  "key29": "633wQTit4SB8TFvjaj4vQJLFW2QznnXSTqCKxGDvp4GHRd21cLsqCqhTad2VcQF6C4pJPsjZBngTfDPtCQSs4unK",
  "key30": "5DQ4iR7jmsqiZis2FBjY93XfXKyj4SVAKH7m3RM2atr8TGq8jCHVHmq5rShLXKrWgXAaU3EbU5pgtHAcZNK3ehgt",
  "key31": "5CrPKJHzsiBvvX3crHt2jYN4vVyicfZE6vUhnrRotxuY4S7RrxgQfB2udv1ZpcJXWgg9PCXw3gvbS17uWNnQ8JeB",
  "key32": "gGERqxZ7W1N7VunAh8dZMndQrJWWYLmNBJcK79U3hbWYCr2i3D27iwSBxvaTnEn9URa41yP5tYSrFAArtXz97F8",
  "key33": "2szvd2rfSSDGAcAuWJKHb8sertHu7XBUzXihijnBTnDMfxD6X4fMZZ2UqFFviQKudfKTn4oR3zoN5tHp1tMsHANB",
  "key34": "5b24GaMgPuxnEbNA8dqMQVzaeeEug7Baka7js9D41Qwhx67owJWyNpjDo55GVKQog1cN21cPDrzYhbkVHa7xR3R8",
  "key35": "4s3C2gahbt79vxu5soDRLD5Ww9bLfY4LY3ibpHnDnqCVsLKc3JeSt6cPaxxAn1Td17DrmfVTjKcxtTrpfZ3fHGWo",
  "key36": "63fsPzbBzLsi9obznf6gS5pKScCRrTMc5XkQ79VfAXYoSjHkma5bQeV6AXW9sXXzK6kaQg8XqEhDqJSM8Rube4yt",
  "key37": "4Yjehqg93fDaxjsF1q1rp45c66GhpA92kE4RFQ9E7yZN28K7UWZQNvVGtWaLdS2jFMJ7Y4wAWNNeoFi2Cc1KegnE",
  "key38": "3QYiiPXtBsDkg7tu8S1z6C3RHXfQMjSRRKoKVkkay6b6FqDH4uMY8FBTbyNWuAwX9pXf4cifBuPM7oJ3NCoPGxPw",
  "key39": "uWATttp7vMjfjFSszwSJ7F9D8qLZBEGou3mJ4hTsx1p8wPaGMZ2PFTm7hZZpF2kfRciqPFFg2kDqXqm7a3ZXiNo",
  "key40": "33yJb6Vnd4t1F2CHdinDe3XB6uQdZPEmEzsRFiXB3oizagCcU5B5QJVvTB6Xze1kRAeSCANsgpjWrPenaqQoFMff",
  "key41": "58Wva9pB8eT1918B8hy1BxQ1uuCkt4EhGeJMiM4swhHxiW7UrmfSZdrGSmVhuvsXLApw1TP65ujSKEP2at6V41VZ",
  "key42": "VMu983UbxMLDj8UjSToKcgZX9p8bmAKDmjXaxdJhRYqQkcLEkbdnEB5E4YQUPny2xHdxcmJWaueMx3jXVVNvfdp",
  "key43": "gp51WHXNp8inNbUxoxpS9mVQvSHpsfBXto3BcWy6CgQNYS6PaR1URrouTEUZ6ABForyXEkqxGFeNiFZCEy3uUSH",
  "key44": "24x4foo9W2fhorDnszpK7Qbvit7z7xbghGQfDGvsyGUTr7CCfC4W359FftBN4SRfxRcYkamTKeSfrjddVdwyPAKp",
  "key45": "4nhRXUbmXFvBbPEiuSce3MnfcbbMandfg3HkQxnz7x9Hg2dNzFMXcQ2f48mBVLFCET4EiBfqG79bG6AFnpAa5H6s",
  "key46": "5pfugBiGRVgFPhpGZ8GWGKYzE68ac4ijN9n4wgiWwZpFgE52TdHZ1jeh6N6t8xxV24XRieRC6NAu8iZHwVWC19tc",
  "key47": "4zp62jjLnkBuTbHChMF6gZpVNyQ53zfW7P6po1fwwn4563rXJo5GummuUbeGVWxeP5rJe55LAkTYGo8MogwRdXdz"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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